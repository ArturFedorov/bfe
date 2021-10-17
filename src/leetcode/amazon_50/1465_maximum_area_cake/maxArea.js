/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
let maxArea = function(h, w, horizontalCuts, verticalCuts) {
  //sorting
  horizontalCuts.sort((a, b) => a-b);
  verticalCuts.sort((a, b) => a-b);

  let mod = 1e9 + 7;

  let maxHeight = verticalCuts[0];
  let maxWidth = horizontalCuts[0];

  verticalCuts.push(w);
  horizontalCuts.push(h);

  for(let i = 0; i < verticalCuts.length - 1; i++) {
    if(verticalCuts[i + 1] - verticalCuts[i] > maxHeight) {
      maxHeight = verticalCuts[i + 1] - verticalCuts[i];
    }
  }

  for(let i = 0; i < horizontalCuts.length - 1; i++) {
    if(horizontalCuts[i+1] - horizontalCuts[i] > maxWidth) {
      maxWidth = horizontalCuts[i+1] - horizontalCuts[i];
    }
  }

  return BigInt(maxHeight) * BigInt(maxWidth) % BigInt(mod);
};


console.log(maxArea(5, 4, [1, 2, 4], [1, 3])); // 4
console.log(maxArea(5, 4, [3,1], [1])); // 6
console.log(maxArea(5, 4, [3], [3])); // 9
console.log(maxArea(1000000000, 1000000000 ,[2], [2]));
