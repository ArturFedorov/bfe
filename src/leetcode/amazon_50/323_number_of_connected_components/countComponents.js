/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
let countComponents = function(n, edges) {
  let visited = [];
  let graph = buildGraph(n, edges);

  let result = 0;

  for(let i = 0; i < n; i++) {
    visited.push(false);
  }

  for(let i = 0; i < n; i++) {
    if(visited[i] === false) {
      result++;
      dfs(i, graph, visited);
    }
  }

  return result;
};

function buildGraph (n, edges) {
  let graph = Array.from({ length: n }, () => []);

  for(let edge of edges) {
    let [src, dist] = edge;
    graph[src].push(dist);
    graph[dist].push(src);
  }

  return graph;
}

function dfs(index, graph, visited = [])  {
  visited[index] = true;
  let nodes = graph[index];

  for(let i = 0; i < nodes.length; i++) {
    if(visited[nodes[i]] === false) {
      dfs(nodes[i], graph, visited);
    }
  }
}

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]])); // 2
console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])); // 1
