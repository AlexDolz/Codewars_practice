// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const currentDateObj = new Date(currentDate);
  const expirationDateObj = new Date(expirationDate);
  if (currentDateObj > expirationDateObj) {
    return false;
  }
  return enteredCode === correctCode;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // false

// *********************************************************************************

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec('1')); // 1
console.log(hexToDec('a')); // 10
console.log(hexToDec('10')); // 16
