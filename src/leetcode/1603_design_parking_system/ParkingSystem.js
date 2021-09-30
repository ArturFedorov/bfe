/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
let ParkingSystem = function(big, medium, small) {
  // all in all, counter
  this.slots = {
    1: [big, big],
    2: [medium, medium],
    3: [small, small]
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if(carType < 1 || carType > 3) return false;

  const slotType = this.slots[carType];
  const currentlyAvailable = --slotType[1];

  return currentlyAvailable < 0 ? false : true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

let obj = new ParkingSystem(1, 1, 0);

console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
