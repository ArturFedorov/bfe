/**
 * @param {number[]} height
 * @return {number}
 */
let trap = function(height) {
  let sum = 0;
  let wallHeight = 0;
  let maxHeight = height[0];
  let heightIndex = 0;

  for(let i = 0; i < height.length; i++) {
    if(height[i] > maxHeight) {
      maxHeight = height[i];
      heightIndex = i;
    }
  }

  for(let i = 0; i <= heightIndex; i++) {
    if(height[i] > wallHeight) {
      wallHeight = height[i];
    } else {
      sum += wallHeight - height[i];
    }
  }

  wallHeight = 0;
  for(let i = height.length - 1; i >= heightIndex; i--) {
    if(height[i] > wallHeight) {
      wallHeight = height[i];
    } else {
      sum += wallHeight - height[i];
    }
  }

  return sum;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
