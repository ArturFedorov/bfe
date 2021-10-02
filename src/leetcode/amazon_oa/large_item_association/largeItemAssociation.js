function itemAssociation(associations) {
  let graph = {};
  for(let [first, second] of associations) {
    if(graph[first] == undefined) graph[first] = []
    if(graph[second] == undefined) graph[second] = []
    graph[first].push(second);
    graph[second].push(first);
  }
  console.log(graph, 'graph');
  let visited = new Set();
  let output = [];
  for(let key of Object.keys(graph)) {
    let result = []
    if(!visited.has(key)) {
      dfs(visited, graph, key, result)
      result.sort()
      if(!output.length) {
        output.push(result);
      } else if(result.length > output[0].length) {
        output[0] = result;
      } else if (result.length == output[0].length) {
        let compare = result[0].localeCompare(output[0][0])
        if(compare == -1) output[0] = result
      }
    }
  }
  console.log('output',output)
  return output


}

function dfs(visited, graph, key, result) {
  if(!visited.has(key)){
    visited.add(key)
    result.push(key)
    for(let nei of graph[key]) {
      if(visited.has(nei)) continue
      dfs(visited, graph, nei, result);
    }
  }
  return result;
}

itemAssociation([['Item1', 'Item2'], ['Item3', 'Item4'], ['Item4', 'Item5']])
// itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item5', 'Item6']])
// itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item4', 'Item5'], ['Item5', 'Item6']])
