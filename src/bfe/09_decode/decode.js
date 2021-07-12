/**
 * @param {string[][]} message
 * @return {string}
 */
export function decode(message) {
  let i = 0;
  let j = 0;
  let decodedMessage = '';

  if(message.length === 0 ) {
    return '';
  }

  while (message[i] && j < message[i].length ) {
    decodedMessage += message[i][j];
    j+=1;

    if(i === message.length - 1 ) {
      i-=1;
    } else {
      i+=1;
    }
  }

  return decodedMessage;
}
