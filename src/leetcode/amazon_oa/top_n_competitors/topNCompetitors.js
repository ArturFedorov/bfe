function topNCompetitors(numCompetitors, topNCompetitors, competitors, numReviews, reviews) {
  const countMap = {};

  for(let review of reviews) {
    const words = review.toLowerCase().split(' ');
    const used = {};

    for(let word of words) {
      if(competitors.includes(word) && !used[word]) {
        used[word] = true;

        if(countMap[word]) {
          countMap[word]++;
        } else {
          countMap[word] = 1;
        }
      }
    }
  }
  
  let results = Object.entries(countMap);
  results.sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  })

  return results.map(res => res[0]).slice(0, topNCompetitors);
}


let numComp = 6;
let topComp = 3;
let comps = ['newshop', 'shopnow', 'afashion', 'fashionbeats', 'mymarket', 'tcellular'];
let numReviews = 6;
let reviews = [
  "newshop is providing good services in the city; everyone should use newshop",
  "best services by newshop",
  "fashionbeats has great services in the city fashionbeats",
  "I am proud to have fashionbeats",
  "newshop has awesome services",
  "Thanks newshop for the quick delivery",
  "Thanks tcellular for the quick delivery tcellular",
  "Thanks mymarket for the quick delivery",
  "Thanks mymarket for the quick delivery",
  "Thanks afashion for the quick delivery afashion",
];

console.log(topNCompetitors(numComp, topComp, comps, numReviews, reviews));
