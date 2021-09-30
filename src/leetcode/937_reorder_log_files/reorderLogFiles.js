/**
 * @param {string[]} logs
 * @return {string[]}
 */
let reorderLogFiles = function(logs) {
  const letterLogs = [];
  const digitLogs = [];

  logs.forEach((log) => {
    if(/ \d/.test(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  });

  letterLogs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);

    const c = aBody.localeCompare(bBody);
    if(c) return c;

    return a.localeCompare(b);
  });

  return [...letterLogs, ...digitLogs];
};


console.log(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"]));
// ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
