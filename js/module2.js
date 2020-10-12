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

// _________________________________________________________

// Задача 2

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(" ").length; 

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// ______________________________________________________

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

// _________________________________________________________

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

// ____________________________________________________________

// Задача 5

// function checkForSpam (str) { 
  
// return(str.toLowerCase().includes("spam")||str.toLowerCase().includes("sale"))

// }

// // console.log(checkForSpam('Latest technology news')); // false

// // console.log(checkForSpam('JavaScript weekly newsletter')); // false

// // console.log(checkForSpam('Get bestsale offers now!')); // true

// // console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ____________________________________________________________

// Задача 6

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//   numbers[i] = (array[i] * 10);
    
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

// ___________________________________________________________

// Задача 7

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i])}
    
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// [1]

// console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// [1]

// console.log(filterArray([{}, () => {}, 2]));
// [2]

// ___________________________________________________________

// Задача 8

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//  for (let i = 0; i < array.length; i += 1) {
//   total += array[i];
//  }
   
//   return total;
// };

// console.log(reduceArray([1, 2, 3]));
// 6

// console.log(reduceArray([-2, 0, 2]));
// 0

// console.log(reduceArray([1, 2, 2.5]));
// 5.5

// ________________________________________________________

// Задача 9

// function isLoginValid (login, min = 4, max = 16) {
//   return (login.length >=min && login.length <= max)
    
// }

// function isLoginUnique  (allLogins, login) {
//   'use strict';
//   return (!allLogins.includes(login));
 
// }

// function addLogin (allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
 
// if (isLoginValid(login) === false) {
//   message = ERROR;
// }
//  else if (isLoginUnique(allLogins, login) === false) {
//   message = REFUSAL;
// } 
// else {
//   allLogins.push(login);
//   message = SUCCESS;
// }
//  return message;

// }


// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 





