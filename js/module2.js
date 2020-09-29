// Задача 1

// const getItemsString = function(array) {
//   'use strict';
//   // Write code under this line
//     let result = "";
//   for (let i= 0; i < array.length; i += 1) {
//    result += `${i + 1} - ${array[i]}\n`;
//   }
// return result
// };
//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
//console.log(getItemsString([5, 10, 15]));

// Задача 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(" ").length; 

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// Задача 3

// function findLongestWord (string = "") {
//       const words = string.split(' ');
//     let longestWord = words[0];
//     for (const word of words) {
//         if (word.length > longestWord.length){
//             longestWord = word
//         }
//     }
//     return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

// console.log(findLongestWord('Google do a roll'));
// 'Google'

// console.log(findLongestWord('May the force be with you'));
// 'force'
  
// Задача 4

// function formatString (string, maxLength = 40) {
//      if (string.length > 40) {
//         return string.slice(0, maxLength) + "..."
//     } else return string
// };
//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

// Задача 5

function checkForSpam (str) { 
  'use strict';
  // Write code under this line
  
}

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); // true