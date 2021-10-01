// class PairString {
//   first;
//   second;
//
//   constructor(first, second) {
//     this.first = first;
//     this.second = second;
//   }
// }
//
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.rank = 0;
//     this.parent = this;
//   }
//
//   value() {
//     return this.val;
//   }
//
//   getParent() {
//     return this.parent;
//   }
//
//   getRank() {
//     return this.rank;
//   }
//
//   setParent(val) {
//     this.parent = val;
//   }
//
//   incrementRank() {
//     this.rank++;
//   }
// }
//
// /**
//  * @param {PairString[]} itemAssociation
//  * @return {string[]}
//  */
// function largeItemAssociation(itemAssociation) {
//   let map = new Map();
//   let asso = new Map();
//
//   let max = null;
//   let maxCount = 0;
//
//   for(let pairString of itemAssociation) {
//     let { first, second } = pairString;
//
//     if(!map.has(first)) map.set(first, new Node(first));
//     if(!map.has(second)) map.set(second, new Node(second));
//
//     let node1 = map.get(first);
//     let node2 = map.get(second);
//
//     let nodeParent1 = node1.getParent();
//     let nodeParent2 = node2.getParent();
//
//     let result = null;
//     if(nodeParent1 !== nodeParent2) {
//       if(nodeParent1.getRank() === nodeParent2.getRank()) {
//         nodeParent2.setParent(nodeParent1);
//         nodeParent1.incrementRank();
//
//         result = nodeParent1.value();
//       } else if(node1.getRank() > nodeParent2.getRank()) {
//         nodeParent2.setParent(nodeParent1);
//         result = nodeParent1.value();
//       } else {
//         nodeParent1.setParent(nodeParent2);
//         result = nodeParent2.value();
//       }
//     } else {
//       result = nodeParent1.value();
//     }
//
//     console.log(result, 'resultresult');
//     if(!asso.has(result)) asso.set(result, new Set());
//     asso.get(result).add(first);
//     asso.get(result).add(second);
//
//
//     if(maxCount < asso.get(result).size) {
//       maxCount = asso.get(result).size;
//       max = result;
//
//       console.log(asso.get(result).size, asso.get(result), maxCount, max, 'asasa');
//     }
//   }
//
//   console.log(asso);
//   const array = Array.from(asso.get(max));
//   array.sort();
//
//   return array;
// }
//
//
// console.log(largeItemAssociation([
//   new PairString('Item1', 'Item2'),
//   new PairString('Item3', 'Item4'),
//   new PairString('Item4', 'Item5')
// ])); // [Item3, Item4, Item5]
function itemAssociation(associations) {
  let graph = {}
  for(let [u,v] of associations) {
    if(graph[u] == undefined) graph[u] = []
    if(graph[v] == undefined) graph[v] = []
    graph[u].push(v)
    graph[v].push(u)
  }
  console.log(graph)
  let visited = new Set()
  let output = []
  for(let key of Object.keys(graph)) {
    let res = []
    if(!visited.has(key)) {
      dfs(key,res)
      res.sort()
      if(!output.length) output.push(res)
      else if(res.length > output[0].length) output[0] = res
      else if (res.length == output[0].length) {
        let compare = res[0].localeCompare(output[0][0])
        if(compare == -1) output[0] = res
      }
    }
  }
  console.log('output',output)
  return output

  function dfs(key,res) {
    if(!visited.has(key)){
      visited.add(key)
      res.push(key)
      for(let nei of graph[key]) {
        if(visited.has(nei)) continue
        dfs(nei,res)
      }
    }
    return res
  }
}

itemAssociation([['Item1', 'Item2'], ['Item3', 'Item4'], ['Item4', 'Item5']])
itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item5', 'Item6']])
itemAssociation([['Item1', 'Item2'], ['Item2', 'Item3'], ['Item4', 'Item5'], ['Item5', 'Item6']])
