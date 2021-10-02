function getFavoriteGenre(users, genres) {
  const result = {};
  const songsToGenre = {};

  for(const genre in genres) {
    const songs = genres[genre];

    for(const song of songs) {
      songsToGenre[song] = genre;
    }
  }

  for(const user in users) {
    const songs = users[user];

    const counter = {};
    let max = 0;
    result[user] = [];

    for(const song of songs) {
      const genre = songsToGenre[song];

      if(genre == null) break;
      if(counter[genre] == null) {
        counter[genre] = 0;
      }

      counter[genre]++;
      max = Math.max(max, counter[genre]);
    }

    for(const genre in counter) {
      if(counter[genre] === max) {
        result[user].push(genre);
      }
    }
  }

  return result;
}


console.log(getFavoriteGenre({
  David: ['song1', 'song2', 'song3', 'song4', 'song8'],
  Emma: ['song5', 'song6', 'song7']
}, {
  Rock: ['song1', 'song3'],
  Dubstep: ['song7'],
  Techno: ['song2', 'song4'],
  Pop: ['song5', 'song6'],
  Jazz: ['song8', 'song9']
}));

// Output: {
//   "David": ["Rock", "Techno"],
//     "Emma":  ["Pop"]
// }

console.log(getFavoriteGenre({
    David: ['song1', 'song2'],
    Emma: ['song3', 'song4']
  }, {
    Rock: ['song1', 'song3'],
    Dubstep: ['song7', 'song4'],
    Techno: ['song2']
  })
);


// Output: {
//   "David": [],
//     "Emma":  []
// }
