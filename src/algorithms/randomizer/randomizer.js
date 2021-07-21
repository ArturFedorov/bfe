function createArrayFromNumber(arrayLength) {
  return Array.from(Array(arrayLength).keys());
}

function randomTasks(array) {
  const results = [];
  while(results.length < 10) {
    const randomIndex = Math.floor(Math.random() * (array.length - 0) + 0);
    const candidate = array[randomIndex];

    if(!results.includes(candidate + 1)) {
      results.push(candidate);
      array.splice(randomIndex, 1);
    }
  }

  return results;
}

const arr = createArrayFromNumber(95).map(i => i+ 1);

console.log(randomTasks(arr));
