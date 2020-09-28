// Задание 1
// const name = "Генератор защитного поля"; 
// let price = 1000; 
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; 
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; 

// console.log(firstMessage);
// console.log(secondMessage);

// Задание 2
// const invoice = 100; 
// const stock = 100;

// const message = invoice <= 100 ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!' ;

// console.log(message);

// Задание 3
// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

// let message;

// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
 
// }
// else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// }
// else if (userPassword !== ADMIN_PASSWORD) {
//   message = ACCESS_DENIED;
// }
// console.log(message)

// Задание 4
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; 
// let balanceCredit = credits - totalPrice; 
// let message;

//  if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// }
// else if (balanceCredit >= 0) {
//   message =`Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }
// else {
//   message = ACCESS_DENIED;
// }
// console.log(message);

// Задание 5
const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
      case CHINA:
      price = 100;
      break

      case AUSTRALIA:
      price = 170;
      break
        
      case INDIA:
      price = 80;
      break

      case JAMAICA:
      price = 120;
      break
      
      default: 
      message = NO_DELIVERY;
  }
}
if (price > 0 ) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
