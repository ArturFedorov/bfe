

/**
 * @param {string} translation
 * @param {any} data
 * @returns {string}
 */
function t(translation, data) {
  let leftIndex = -1;
  let output = '';

  for(let i = 0; i < translation.length; i++) {
    const left = translation.substring(i, i + 2);

    if(left !== '{{' && leftIndex === -1) {
      output += translation[i];
      continue;
    }

    if(leftIndex === -1 && left === '{{') {
      leftIndex = i;
      continue;
    }

    if(leftIndex !== -1 && left === '}}') {
      const key = translation.substring(leftIndex + 2, i);

      if(data instanceof Object && key in data) {
        output += data[key]
      }
      leftIndex = -1;
      i += 1;
    }
  }

  if(leftIndex !== -1) {
    output += translation.substring(leftIndex, translation.length);
  }

  return output;
}


console.log(t('BFE.dev is {{{evaluation}', {evaluation: 'fantastic'}));
// "BFE.dev is {{{evaluation}"

console.log(t('BFE.dev is {{{evaluation}}}', {'{evaluation': 'fantastic'}));
// "BFE.dev is fantastic}"

console.log(t('BFE.dev is {{evalu ation}}', {'evalu ation': 'fantastic'}));
// "BFE.dev is fantastic"

console.log(t('BFE.dev is {{evaluation}}'));
// "BFE.dev is "
