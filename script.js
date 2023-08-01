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

// ***************************Nr 1*************************************

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec('1')); // 1
console.log(hexToDec('a')); // 10
console.log(hexToDec('10')); // 16

// **********************************Nr2**********************************

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

// *****************************Nr3**************************************

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

// ***************************Nr 4***********************************

// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

const enough = (cap, on, wait) => {
  if (on + wait <= cap) {
    return 0;
  } else {
    return Math.abs(cap - (on + wait));
  }
};

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0
console.log(enough(84, 62, 69)); // 0

// ******************************* Nr 5 ********************************

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

const capitalize = s => {
  const arrayWord = s.split('');
  const odd = arrayWord
    .map((elem, i) => {
      if (i % 2 === 0) {
        return elem.toUpperCase();
      } else {
        return elem;
      }
    })
    .join('');

  const even = arrayWord
    .map((elem, i) => {
      if (i % 2 !== 0) {
        return elem.toUpperCase();
      } else {
        return elem;
      }
    })
    .join('');
  return [odd, even];
};

console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('codewarriors')); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']

// **************************** Nr 6 ******************************************

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

const flattenAndSort = array => {
  return array.flat().sort((a, b) => a - b);
};

console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));

// ************************** Nr 7 ********************************************

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

const toBinary = n => {
  return +n.toString(2);
};

console.log(toBinary(1));
console.log(toBinary(2));
console.log(toBinary(3));
console.log(toBinary(5));
console.log(toBinary(11));

// ********************************* Nr 8 *********************************
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = str => str.replace(/[aeiou]/gi, '');

console.log(disemvowel('This website is for losers LOL!'));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);

// ****************************** Nr 9 ************************************
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = a => {
  const uniqueElem = new Set();

  for (const num of a) {
    if (uniqueElem.has(num)) {
      uniqueElem.delete(num);
    } else {
      uniqueElem.add(num);
    }
  }

  return Array.from(uniqueElem)[0];
};

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));

// ******************************* Nr 10 ***********************************

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

const busStops = number => {
  let sum = 0;
  let difference = 0;

  for (const subArray of number) {
    sum += subArray[0];
    difference += subArray[1];
  }
  return sum - difference;
};

console.log(
  busStops([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
console.log(busStops([[0, 0]]));

// ***************************** Nr 11 **************************************
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

const betterThanAverage = (classPoints, yourPoints) => {
  const reduceClassPoints =
    classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length;
  return true ? reduceClassPoints < yourPoints : false;
};

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// ****************************** Nr 12 ************************************

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).

// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.

// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.

// All inputs will be integers. Please return an integer. Round down.

const dutyFree = (normPrice, discount, hol) => {
  return Math.floor(hol / (normPrice * (discount / 100)));
};

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));

// **************************** NR 13 ***************************************

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

const solve = s => {
  let lowerCase = 0;
  let upperCase = 0;

  for (const char of s) {
    if (char === char.toUpperCase()) {
      upperCase++;
    } else {
      lowerCase++;
    }
  }

  console.log(upperCase, lowerCase);

  if (upperCase > lowerCase) {
    return s.toUpperCase();
  } else if (lowerCase === upperCase) {
    return s.toLowerCase();
  } else if (lowerCase > upperCase) {
    return s.toLowerCase();
  }
};

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('Code'));
