
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  const allowedTypes = new Set([
    'number',
    'null',
    'string',
    'undefined',
    'bigint',
    'symbol',
    'boolean',
    'array',
    'arraybuffer',
    'date',
    'function',
    'map',
    'set'
  ]);

  let type = ''

  let tag = Object.prototype.toString.call(data);
  const matches = tag.match(/\[object (\S+)\]/);

  if(matches) {
    console.log(matches);
    type = matches[1].toLowerCase();
  }

  if(allowedTypes.has(type)) {
    return type;
  }

  return 'object';
}


detectType([])
