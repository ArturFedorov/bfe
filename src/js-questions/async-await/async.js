const async = (generator) => {
  const g = generator();
  (function next(value) {
    const n = g.next(value);
    if(n.done) return;
    n.value.then(next);
  }());
}

async(function* () {
  const response = yield fetch('https://rickandmortyapi.com/api/character');
  console.log(response);
  const data = yield response.json();
  console.log(data);
})

export default async;
