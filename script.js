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
