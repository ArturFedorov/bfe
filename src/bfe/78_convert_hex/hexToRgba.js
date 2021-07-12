
function normalize(hex) {
  const digits = hex.toLowerCase().slice(1);

  if(digits.length === 3) {
    return [...digits].map(item => item.repeat(2)).join('') + 'ff';
  }

  if(digits.length === 4) {
    return [...digits].map(item => item.repeat(2)).join('');
  }

  if(digits.length === 6) {
    return digits + 'ff';
  }
  console.log(digits, hex,'wcwdcwcce');
  return digits;
}

function roundUp(num) {
  return num.toFixed(2).replace(/([.0]+)$/, '') || '0';
}

function hexToRgba(hex) {
  const regValidHexColor = /^#[0-9a-fA-F]+$/
  if(![4,5,7,9].includes(hex.length) || !regValidHexColor.test(hex)) {
    throw new Error('input is invalid');
  }

  const normalized = normalize(hex);
  console.log(normalized, 'normalized', normalize(hex));
  const regColorsParts = /(.{2})(.{2})(.{2})(.{2})/

  const match = normalized.match(regColorsParts);

  const [r, g, b, a] = match.slice(1, 5).map(part => parseInt(part, 16));

  return `rgba(${r},${g},${b},${roundUp(a/255)})`
}

console.log(hexToRgba('#0001'));
