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

// *********************************************************************************

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = function (humanYears) {
  let catYear = 0;
  let dogYear = 0;

  if (humanYears >= 1) catYear += 15;
  if (humanYears >= 2) catYear += 9;
  if (humanYears > 2) catYear += (humanYears - 2) * 4;

  if (humanYears >= 1) dogYear += 15;
  if (humanYears >= 2) dogYear += 9;
  if (humanYears > 2) dogYear += (humanYears - 2) * 5;

  return [humanYears, catYear, dogYear];
};

console.log(humanYearsCatYearsDogYears(1)); // [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)); // [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10)); // [10, 56, 64]

// *********************************************************************************

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

const warnTheSheeps = queue => {
  if (queue[queue.length - 1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
  } else {
    let wolfIndex = queue.findIndex(animal => animal === 'wolf');
    let sheepNumber = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by wolf!`;
  }
};

console.log(
  warnTheSheeps([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
  ])
); //"Oi! Sheep number 2! You are about to be eaten by a wolf!"
console.log(
  warnTheSheeps(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])
); //"Oi! Sheep number 5! You are about to be eaten by a wolf!"
console.log(warnTheSheeps(['sheep', 'sheep', 'wolf'])); //"Pls go away and stop eating my sheep"
