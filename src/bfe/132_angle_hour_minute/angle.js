/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  const [hour, min] = time.split(':').map((segment) => parseInt(segment, 10));

  const h = hour >= 12 ? hour - 12 : hour;
  const m = min;

  const angleMin = (m /60) * 360;
  const angleHour = (h / 12) * 360 + angleMin / 12;

  const angle = Math.abs(angleHour - angleMin);
  const finalAngle = angle > 180 ? 360 - angle : angle;

  return Math.round(finalAngle);
}


console.log(angle('12:00'));

console.log(angle('23:30'));
