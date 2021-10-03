/**
 *
 * @param logs
 * @param threshold
 */
function parseTransactions(logs, threshold) {
  let countMap = {};

  for(let log of logs) {
    let [user1, user2] = log;

    countMap[user1] =(countMap[user1] || 0) + 1;

    if(user1 !== user2) {
      countMap[user2] = (countMap[user2] || 0) + 1;
    }
  }

  let userIds = [];

  for(let [key, value] of Object.entries(countMap)) {
    if(value >= threshold) {
      userIds.push(key);
    }
  }

  userIds.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));

  return userIds;
}

console.log(parseTransactions([
  ['345366', '89921', '45'],
  ['029323', '38239', '23'],
  ['38239', '345366', '15'],
  ['029323', '38239', '77'],
  ['345366', '38239', '23'],
  ['029323', '345366', '13'],
  ['38239', '38239', '23']
], 3));
