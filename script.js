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

// ***************************Nr 1*******************************

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

// *************************** Nr 14 *****************************************
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const addBinary = (a, b) => {
  return (a + b).toString(2);
};

console.log(addBinary(1, 1));
console.log(addBinary(5, 9));

// ******************************* Nr 15 *************************************

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = array => {
  const odd = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;
  return array.map(num => (num % 2 !== 0 ? odd[oddIndex++] : num));
};

// 2 solution
// function sortArray(array) {
//   let odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
//   return array.map(elem => (elem % 2 === 0 ? elem : odd.shift()));
// }

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// ******************************** Nr 16 **************************************

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

const getDivisorsCnt = n => {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        count++;
      } else {
        count += 2;
      }
    }
  }

  return count;
};

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));

// ****************************** Nr 17 **************************************

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

const addLength = str => {
  return str.split(' ').map(word => `${word} ${word.length}`);
};

console.log(addLength('apple ban'));
console.log(addLength('you will win'));

// ******************************* Nr 18 *************************************

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

const rowWeights = array => {
  let team1 = 0;
  let team2 = 0;

  array.forEach((elem, i) => {
    if (i % 2 === 0) {
      team1 += elem;
    } else {
      team2 += elem;
    }
  });
  return [team1, team2];
};

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));

// ******************************** Nr 19 *************************************
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_list = l => {
  return l.filter(elem => typeof elem === 'number');
};

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// ******************** Nr 19 *************************************

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let copy = [...numbers];
  let smallest = Math.min(...numbers);
  let smallestIdx = numbers.indexOf(smallest);
  copy.splice(smallestIdx, 1);
  return copy;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));

// ********************* Nr 20 ******************************

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
console.log(
  sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois')
);
console.log(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'));

// *************************** Nr 21 *************************
// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
  return parseInt(bin, 2);
}

// ************************* Nr 22 ***************************

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = function (array) {
  return array.map((line, index) => `${index + 1}: ${line}`);
};

console.log(number(['a', 'b', 'c']));

// **************************** Nr 23 *************************

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

const getEvenNumbers = function (numbersArray) {
  return numbersArray.filter(elem => elem % 2 === 0);
};

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2]));
console.log(getEvenNumbers([12, 14, 15]));
console.log(getEvenNumbers([13, 15]));
console.log(getEvenNumbers([1, 3, 9]));

// ************************** Nr 24 ***************************

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(getCount('abracadabra'));

// **************************** Nr 25 *************************

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  return arr.includes(item);
}

console.log(include([1, 2, 3, 4, 5], 3));
console.log(include([1, 2, 4, 5], 3));
console.log(include([], 3));

// ************************** Nr 26 ***************************

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: 'dog', legs: 4, color: 'white' }));
console.log(animal({ name: 'cock', legs: 2, color: 'red' }));
console.log(animal({ name: 'rabbit', legs: 4, color: 'gray' }));

// ************************** Nr 27 *****************************

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

const haystack_1 = [
  '3',
  '123124234',
  undefined,
  'needle',
  'world',
  'hay',
  2,
  '3',
  true,
  false,
];
const haystack_2 = [
  '283497238987234',
  'a dog',
  'a cat',
  'some random junk',
  'a piece of hay',
  'needle',
  'something somebody lost a while ago',
];
const haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  'needle',
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];
const haystack_4 = [
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk',
];

// function findNeedle(haystack) {
//   const index = haystack.indexOf('needle');

//   if (index !== -1) {
//     return `found the needle at position ${index}`;
//   } else {
//     return `there is no needle in haystack`;
//   }
// }

const findNeedle = haystack =>
  `Found the needle at position ${haystack.indexOf('needle')}`;

console.log(findNeedle(haystack_1)); // 3
console.log(findNeedle(haystack_2)); // 5
console.log(findNeedle(haystack_3)); // 30
console.log(findNeedle(haystack_4)); // 5

// ************************** Nr 28 **************************

// Implement your method myMap
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

const number2 = [1, 2, 3, 4];

const number2Doubled = number2.myMap(num => num * 2);

console.log(number2Doubled);

// ************************* Nr 29 *****************************

//   Palindrom

const isPalindrom = str => {
  const sanitized = str
    .toLowerCase()
    .split('')
    .filter(
      char => char !== ' ' && char !== '!' && char !== '?' && char !== ','
    )
    .join('');

  const reversed = sanitized.split('').reverse().join('');

  return reversed === sanitized;
};

console.log(isPalindrom('Was it a car or a cat I saw'));
console.log(isPalindrom('Able was I, I saw Elba'));
console.log(isPalindrom('Hello'));
console.log('********************************');

// ************************* Nr 30 *****************************

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays...

function printArray(array) {
  return array.join();
}

console.log(printArray(['h', 'o', 'l', 'a']));
console.log('********************************');

// ******************************* Nr 31 *************************

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

function reverse(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverse('Hello World'));
console.log(reverse('Hi There.'));
console.log('**********************************');

// ************************ Nr 32 ********************************

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
console.log('******************************************');

// ************************** Nr 33 ****************************

// Write a function that takes a sentence as input and returns the sentence with the words reversed but the order of the words intact.

// Requirements:
// You should not reverse the characters of the words, only their positions.
// Words are separated by spaces.

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('The quick brown fox'));
console.log('*******************************');

// **************************** Nr 34 ***************************

// Write a function that takes an array of numbers and returns the largest number in the array.

// Requirements:
// Assume the array will contain at least one number.
// Do not use the built-in Math.max() method.

function findLargest(array) {
  let largest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(findLargest([1, 3, 5, 15, 2, 4]));
console.log('*****************************************');

// *************************** Nr 34 ****************************

// Reverse a String Without Using Built-in Methods
// Problem: Write a function that reverses a string without using any built-in methods like reverse() or split(). You need to implement the logic from scratch.

// Requirements:

// Do not use reverse() or split() methods.
// The function should return the reversed string.

function reverseString(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString('hello'));
console.log(reverseString('world'));
console.log('**********************************');

// ****************************** Nr 35 *************************
// FizzBuzz
// Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz", for multiples of 5, print "Buzz", and for numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Requirements:
// The function should return an array with the results for each number in the range from 1 to n.

function fizzBuzz(num) {
  const array = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i.toString());
    }
  }
  console.log(array);
  return array;
}

console.log(fizzBuzz(15));
console.log('*********************************');

// ***************************** Nr 36 *************************
// Remove Duplicates from an Array
// Write a function that takes an array of numbers and returns a new array with all the duplicates removed, preserving the order of the elements.

// Requirements:
// The function should not modify the original array.
// You can use basic array methods like map(), filter(), or a Set, but do not use any external libraries.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 3, 5]));
console.log('*****************************');

// **************************** Nr 37 *************************

// Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum(num) {
  num.sort((a, b) => b - a);
  const largest = num[0];
  const secondeLargest = num[1];
  return largest + secondeLargest;
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));
console.log('********************************');

// **************************** Nr 38 *************************
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

console.log(add(1, 2));
console.log(divide(1, 2));
console.log(multiply(1, 2));
console.log(mod(1, 2));
console.log(exponent(1, 2));
console.log(subt(1, 2));
console.log('***************************');

// ************************* Nr 39 ***************************
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }

  return false;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
console.log('*******************************');

// ************************* Nr 40 *****************************

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const charCount = {};

  if (string === '') return charCount;

  for (let char of string) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(count(''));
console.log(count('a'));
console.log(count('ab'));
console.log(count('aba'));
console.log(count('ABC'));
console.log('*************************');

// *********************** Nr 41 *******************************

// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

function mango(quantity, price) {
  const setsOfThree = Math.floor(quantity / 3);
  const remainingMangoes = quantity % 3;
  const totalCost = setsOfThree * 2 * price + remainingMangoes * price;
  return totalCost;
}

console.log(mango(3, 3));
console.log(mango(9, 5));
console.log('*************************');

// ************************** Nr 42 ****************************

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(array) {
  return array.filter(value => value % 2 === 0);
}

console.log(noOdds([0, 1]));
console.log(noOdds([0, 1, 2, 3]));
console.log('**************************');

// ************************* Nr 43 *****************************

// Complete the solution so that the function will break up camel casing, using a space between words

function solution(string) {
  let result = '';
  for (let char of string) {
    if (char === char.toUpperCase()) {
      result += ' ' + char;
    } else {
      result += char;
    }
  }
  return result;
}

console.log(solution(''));
console.log(solution('camelCasing'));
console.log(solution('identifier'));
console.log('*******************************');

// ************************** Nr 44 ****************************

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  // const absolute = Math.abs(number);
  // const string = absolute.toString();
  // let sum = 0;
  // for (let char of string) {
  //   sum += +char;
  // }
  // return sum;

  return Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, char) => sum + +char, 0);
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
console.log('****************************');

// ***************************** Nr 45 ************************

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends) {
  return friends.filter(friend => friend.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));
console.log('******************************');

// ************************ Nr 46 *****************************

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
  if (!name || name.trim() === '') return 'Hello, World!';
  const low = name.toLowerCase();
  return `Hello, ${low.charAt(0).toUpperCase() + low.slice(1)}!`;
}

console.log(hello('alice'));
console.log(hello('johN'));
console.log(hello(''));
console.log(hello());
console.log('************************************');

// ***************************** Nr 47 *************************

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, sum) => acc * sum, 1) - b.reduce((acc, sum) => acc * sum, 1)
  );
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
console.log(findDifference([24, 4, 3], [5, 16, 19]));
console.log('***********************************');

// ************************ Nr 48 ******************************

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
console.log('**************************');

// *********************** Nr 49 *******************************

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
console.log('***************************************');

// *********************** Nr 50 *******************************

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

function minValue(values) {
  return +[...new Set(values)].sort((a, b) => a - b).join('');
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log('***********************************');

// ************************* Nr 51 *****************************

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(2742));
console.log('********************************');

// *************************** Nr 52 ***************************

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s
    .split('')
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join('-');
}

console.log(accum('ZpglnRxqenU'));
console.log(accum('NyffsGeyylB'));
console.log(accum('MjtkuBovqrU'));
console.log(accum('EvidjUnokmM'));
console.log(accum('hbideVbxncC'));
console.log('**************************');

// **************************** Nr 53 **************************

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s) {
  let vowels = 'aeiouAEIOU';
  let result = '';

  for (let char of s) {
    if (vowels.includes(char)) {
      result += '!';
    } else {
      result += char;
    }
  }
  return result;
}

console.log(replace('Hi!'));
console.log(replace('!Hi! Hi!'));
console.log(replace('aeiou'));
console.log(replace('ABCDE'));
console.log('*****************************');

// ************************* Nr 54 *****************************

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));
console.log('******************************');

// **************************** Nr 55 **************************

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
}

console.log(feast('great blue heron', 'garlic naan'));
console.log(feast('chickadee', 'chocolate cake'));
console.log(feast('brown bear', 'bear claw'));
console.log('********************************');

// ************************** Nr 56 ***************************

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

console.log(regex.test('Abc123'));
console.log(regex.test('abcdef'));
console.log(regex.test('ABCDEF'));
console.log(regex.test('123456'));
console.log(regex.test('Abc12'));
console.log(regex.test('Abc_123'));
console.log('**************************');

// ***************************** Nr 57 **************************

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};

console.log('hello world'.toAlternatingCase());
console.log('HELLO WORLD'.toAlternatingCase());
console.log('12345'.toAlternatingCase());
console.log('***********************************');

// ********************** Nr 58 *******************************

// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {
  const weekdays = [
    'Wrong, please enter a number between 1 and 7',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekdays[num] || weekdays[0];
}

console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));
console.log('******************************');

// ************************* Nr 59 *****************************

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url) {
  const replace = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  return replace.split('.')[0];
}

console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));
console.log('*************************************');

// ************************** Nr 60 ****************************

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrom2(x) {
  return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
    ? true
    : false;
}

console.log(isPalindrom2('a'));
console.log(isPalindrom2('aBa'));
console.log(isPalindrom2('hello'));
console.log(isPalindrom2('madam'));
console.log(isPalindrom2('racecar'));
console.log('*************************************');

// **************************** Nr 61 **************************

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const words = x.split(' ');
  let maxScore = 0;
  let highestWord = '';

  for (let word of words) {
    let score = [...word].reduce(
      (sum, char) => sum + (char.charCodeAt(0) - 96),
      0
    );
    if (score > maxScore) {
      maxScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log('**********************************');

// ******************************** Nr 62 ***********************

// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log('******************************');

// *************************** Nr 63 ***************************

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  return games.reduce((total, game) => {
    const [x, y] = game.split(':').map(Number);
    return total + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
console.log(
  points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])
);
console.log('*******************');

// ************************* Nr 64 ******************************

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array

function countBy(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log('***********************');

// ************************ Nr 65 *******************************

// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

function findAverage(nums) {
  return nums.reduce((sum, acc) => sum + acc, 0) / nums.length;
}

console.log(findAverage([1]));
console.log(findAverage([1, 3, 5, 7]));
console.log('********************************');

// *********************** Nr 66 *******************************

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

function multiTable(number) {
  return Array.from(
    { length: 10 },
    (_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`
  ).join('\n');
}

console.log(multiTable(5));
console.log(multiTable(1));
console.log('***************************');

// ***************************** Nr 67 **************************

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

function saleHotdogs(n) {
  return n >= 5 && n < 10 ? n * 95 : n < 5 ? n * 100 : n * 90;
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
console.log('**********************************');

// ************************** Nr 68 *****************************

// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66));
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
console.log('****************************');

// ************************ Nr 69 ******************************

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps',
  ])
);
console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones',
  ])
);
console.log('*********************************');

// ************************ Nr 70 ******************************

// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truthy, func1 should be called, otherwise call the func2.

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

_if(
  true,
  () => console.log('True function called'),
  () => console.log('False function called')
);

_if(
  false,
  () => console.log('True function called'),
  () => console.log('False function called')
);
console.log('**********************************');

// ***************************** Nr 71 **************************

// Write a function called removeDuplicates that takes an array of numbers and returns a new array with duplicate numbers removed while preserving the original order.

function removeDuplicates(array) {
  return [...new Set(array)];

  // Without Set
  // let seen = {};
  // let uniq = [];

  // for (num of array) {
  //   if (!seen[num]) {
  //     uniq.push(num);
  //     seen[num] = true;
  //   }
  // }
  // return uniq;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([7, 8, 8, 9, 9, 10]));
console.log('*******************************');

// ********************************** Nr 72 *********************

// Write a JavaScript function that takes a string as input and returns the reversed version of it.

// Make sure the function works even if the input has spaces or special characters.
// Write the function in two different ways (e.g., using a loop and using built-in methods).

function reverseString(string) {
  // return string.trim().split('').reverse().join('');

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

console.log(reverseString('hello'));
console.log(reverseString('JavaScript'));
console.log('****************************');
// ************************ Nr 73 ******************************

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(13, 0));
console.log('*******************************');

// ************************* Nr 74 *****************************

// Remove all exclamation marks from the end of sentence.

function remove(string) {
  // if (string[string.length - 1] !== '!') return string;

  // let i = string.length - 1;

  // while (i >= 0 && string[i] === '!') {
  //   i--;
  // }
  // return string.slice(0, i + 1);

  return string.replace(/!+$/, '');
}

console.log(remove('Hi!'));
console.log(remove('!Hi'));
console.log(remove('213!Hi!'));
console.log(remove('213!Hi!!!!'));
console.log('********************************');

// *************************** Nr 75 ***************************

// Schreibe eine Funktion in JavaScript, die überprüft, ob eine gegebene Zeichenkette ein Palindrom ist. Ein Palindrom ist ein Wort, das vorwärts und rückwärts gleich ist (z. B. "radar" oder "level"). Die Funktion sollte keine Groß-/Kleinschreibung beachten.

function isPalindrome3(string) {
  string = string.toLowerCase();
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome3('Radar')); // true
console.log(isPalindrome3('hello')); // false
console.log(isPalindrome3('Level')); // true
console.log(isPalindrome3('world')); // false
console.log('********************************');

// *************************** Nr 76 ***************************

// Schreibe eine Funktion, die das häufigste Element in einem Array findet und zurückgibt.

function mostFrequentElement(arr) {
  let map = new Map();
  let maxCount = 0;
  let mostFrequent = null;

  for (let num of arr) {
    let count = (map.get(num) || 0) + 1;
    map.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 5, 1])); // 3
console.log(mostFrequentElement(['a', 'b', 'a', 'c', 'a', 'b'])); // "a"
console.log(mostFrequentElement([true, false, false, true, true])); // true
console.log('*********************************');

// *********************** Nr 77 ********************************

// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

console.log(validateUsr('assddad'));
console.log(validateUsr('a'));
console.log(validateUsr('Hadsgs'));
console.log('*****************************');

// ****************************** Nr 78 **************************

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) descending = false;
    if (array[i] < array[i - 1]) ascending = false;
  }

  if (ascending) return `yes, ascending`;
  if (descending) return `yes, descending`;
  return `no`;
}
console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
console.log('**********************************');

// ************************ Nr 79 **************************************

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

function arithmetic(a, b, operator) {
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
  };

  return operations[operator](a, b);
}

// const arithmetic2 = (a, b, operator) =>
//   ({
//     add: a + b,
//     subtract: a - b,
//     multiply: a * b,
//     divide: a / b,
//   }[operator]);

console.log(arithmetic(1, 2, 'add'));
console.log(arithmetic(8, 2, 'subtract'));
console.log(arithmetic(5, 2, 'multiply'));
console.log(arithmetic(8, 2, 'divide'));
console.log('********************************');

// ******************************* Nr 80 ******************************

// Write a function that takes three arguments:

// a — the first number,
// b — the second number,
// operation — a string that determines which operation to perform on the numbers ("modulo", "power", "min", "max").
// Implement the operation based on the value of operation. Here's what each operation should do:

// "modulo": return the remainder of dividing a by b.
// "power": return a raised to the power of b (a ^ b).
// "min": return the minimum of the two numbers.
// "max": return the maximum of the two numbers.

const operationResult = (a, b, operator) =>
  ({
    modulo: a % b,
    power: a ** b,
    min: Math.min(a, b),
    max: Math.max(a, b),
  }[operator]);

console.log(operationResult(5, 3, 'modulo')); // 2
console.log(operationResult(2, 3, 'power')); // 8
console.log(operationResult(5, 3, 'min')); // 3
console.log(operationResult(5, 3, 'max')); // 5
console.log('************************************');

// ***************************** Nr 81 *******************************

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
    return -1;
  }
  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  }
  return 0;
}

console.log(sameCase('C', 'B'));
console.log(sameCase('b', 'a'));
console.log(sameCase('d', 'd'));
console.log(sameCase('A', 'd'));
console.log(sameCase('a', 'D'));
console.log(sameCase('\t', 'Z'));
console.log(sameCase('H', ':'));
console.log('***********************');
// ************************* Nr 82 ***********************************

// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .reverse()
    .join('');
}

console.log(reverseLetter('krishan'));
console.log(reverseLetter('ultr53o?n'));
console.log(reverseLetter('ab23c'));
console.log('*******************************');

// **************************** Nr 83 *******************************

// You have an array of objects representing users:

// Write a function that returns only the users who are 18 years old or older.

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];

function adultUsers(users) {
  return users.filter(user => user.age > 17);
}

console.log(adultUsers(users));
console.log('******************************');

// ****************************** Nr 84 ******************************

// Write a function that takes a string as input and returns the longest word in the string.

function findLongestWord(str) {
  let longestWord = '';
  const array = str.split(' ');

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
console.log('**********************************');

// ******************************* Nr 85 ******************************

// Write a function that takes an array and returns a new array with duplicate values removed.

function removeDuplicates2(arr) {
  // return [...new Set(arr)];

  let seen = {};
  let uniq = [];

  for (num of arr) {
    if (!seen[num]) {
      uniq.push(num);
      seen[num] = true;
    }
  }
  return uniq;
}

console.log(removeDuplicates2([1, 2, 2, 3, 4, 4, 5]));
console.log('**************************');

// **************************** Nr 86 *********************************

// Write a function that takes a number as input and returns the number reversed.

function reverseNumber(num) {
  return +num.toString().split('').reverse().join('');
}

console.log(reverseNumber(12345));
console.log('***************************');

// ****************************** Nr 87 ******************************
// Write a function that checks if a given string is a palindrome (i.e., it reads the same forwards and backwards, ignoring spaces and case).

function isPalindrome4(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome4('A man a plan a canal Panama'));
console.log(isPalindrome4('hello'));
console.log(isPalindrome4('RACECAR'));
console.log('***************************');

// ******************************** Nr 88 ****************************

function secondLargest(arr) {
  // const uniq = [...new Set(arr)];

  // if (uniq.length <= 1) return null;

  // const sorted = uniq.slice().sort((a, b) => b - a);
  // return sorted[1];

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 5, 8, 20, 15])); // Output: 15
console.log(secondLargest([10, 10, 10]));
console.log(secondLargest([10, 5, 8, 20, 20, 15, 15])); // Output: 15
console.log(secondLargest([4, 1, 2, 3])); // Output: 3
console.log(secondLargest([10])); // Output: null
console.log('***************************************');

// *************************** Nr 89 *******************************
// Count Vowels in a String
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in it.

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  str = str.toLowerCase();

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('Javascript')); // Output: 3
console.log(countVowels('Sky')); // Output: 0
console.log('****************************************');

// ******************************* Nr 90 ****************************

//Remove Duplicates from an Array
// Write a function that removes duplicate values from an array and returns a new array with only unique values.

function removeDuplicates3(arr) {
  return [...new Set(arr)];

  // let uniq = [];
  // for (let num of arr) {
  //   if (!uniq.includes(num)) {
  //     uniq.push(num);
  //   }
  // }
  // return uniq;
}

console.log(removeDuplicates3([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates3(['apple', 'banana', 'apple'])); // Output: ["apple", "banana"]
console.log(removeDuplicates3([])); // Output: []
console.log('***************************');

// ****************************** Nr 91 ******************************

// Check if Two Strings Are Anagrams
// Write a function that checks if two strings are anagrams (contain the same letters in different orders).

function normalizeAndSort(str) {
  return str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
}
function isAnagram(str1, str2) {
  return normalizeAndSort(str1) === normalizeAndSort(str2);
}

console.log(isAnagram('listen', 'silent')); // Output: true
console.log(isAnagram('hello', 'world')); // Output: false
console.log(isAnagram('rail safety', 'fairy tales')); // Output: true
console.log('**************************');

// ********************************* Nr 92 *****************************

// Find the Missing Number in an Array
// Write a function that takes an array containing n unique numbers in the range 1 to n+1 (one number is missing) and finds the missing number.

function findMissingNumber(arr) {
  const maxNum = Math.max(...arr);
  const totalSum = (maxNum * (maxNum + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);

  return totalSum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
console.log(findMissingNumber([1, 2, 3, 4, 5])); // Output: 0
console.log('******************************');
