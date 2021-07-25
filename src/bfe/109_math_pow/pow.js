
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power){
  if(power === 0) {
    return 1;
  } else if(power === -1) {
    return 1/base;
  } else if(power === 1) {
    return base;
  }

  const isPowerNegative = power < 0;
  const positivePower = isPowerNegative ? power * -1 : power;

  let base2 = 0;
  let powerDivided = positivePower;

  while (powerDivided > 1) {
    powerDivided /= 2;
    base2++;
  }

  let value = isPowerNegative ? 1/base : base;
  for(let i = 0; i < base2 - 1; i++) {
    value *= value;
  }

  for(let j = pow(2, base2 - 1); j < positivePower; j++) {
    value = isPowerNegative ? value/base : value * base;
  }

  return value;
}



/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow2(base, power){
  if (power < 0) {
    return 1 / powBinary(base, -power)
  }

  return powBinary(base, power)
}

function powBinary(base, power) {
  if (power === 0) return 1
  if (power === 1) return base

  const halfRes = pow2(base, Math.floor(power / 2))
  return power % 2 == 0 ? halfRes * halfRes : halfRes * halfRes * base
}
