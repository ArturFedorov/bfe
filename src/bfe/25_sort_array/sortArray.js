function sort(items, newOrder) {
  let i = 0;
  while (i<items.length) {
    if(i != newOrder[i]) {
      let newIndex = newOrder[i];
      [items[i], items[newIndex]] = [items[newIndex], items[i]];
      [newOrder[i], newOrder[newIndex]] = [newOrder[newIndex], newOrder[i]];

      console.log(newOrder[i], newOrder[newIndex], newOrder, 'assa');
    }
    i++;
  }

}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0];

sort(A, B)
