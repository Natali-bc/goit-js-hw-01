// ------------------------------------
// let car = {
//   speed: 0,
//   color: "white",
//   isEngineOn: false,
//   isLightOn: false,
  
//   engineToggle() {
//     car.isEngineOn = !car.isEngineOn;
//     console.log(car.isEngineOn);
//   },
//   speedOn(n) {
//     car.isEngineOn ? car.speed += n : "";
//     car.isEngineOn ? console.log(`Speed is increased on ${n}. Current speed: ${car.speed}`) : "";
//   },
  
//   speedOff(n) {
//     car.isEngineOn ? car.speed -= n : "";
//     car.isEngineOn ? console.log(`Speed is reduced on ${n}. Current speed: ${car.speed}`) : "";
//   },

//   lightsToggle() {
//     car.isEngineOn = true;
//     car.isLightOn = !car.isLightOn;
//     car.isLightOn ? console.log("Light is on") : console.log("Light is off");
//   }
// }
// car.engineToggle()
// car.lightsToggle()
// car.speedOn(30)
// car.speedOff(20)
// car.lightsToggle()
// ___________________________________

//   const askName = function(msg) {
//     let name = prompt("What's your name");
//     console.log(msg + name);
//   }
//     const greeting = function(callback) {
// let msg = "Hello, my name is: ";
// callback(msg);

//   }
//   greeting(askName);

// _______________________________________________

// const сreatingOrder = function (name, price, callback) {
// callback (name, price);
// }
// const product = function(name, price) {
//   console.log({name, price});
//   array.push({name, price})
//   console.log(array);
// }


// ___________________________________________________

// const array = [];

// сreatingOrder("Phone", 5000, product)

// const askName = function(message) {
// let name = prompt("Write your name, please")
// console.log(message + name);
// }

// const greeting = function(callback) {
// let message = "My name is ";
// callback(message);
// }
// greeting(askName)

// ______________________________________________

// const obj = function() {
//   let a = 1;
//   let b = 5;
//   const item = function() {
//     console.log(a, b);
//   }
//   item()
// }
// obj()

// ____________________________________________________________

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

// const totalSum = 0;
// const sum = function(a) {
//  return function totalSum(b) {
//    console.log(a+b);
// }
// }
// sum(1)(2) 
// sum(5)(-1)

// _____________________________________________________

// 1)Напишите ф-цию которая будет создавать массив машин(оъектов).
// 2)Как только длина массива достигает 5 - масив очищается а обьекты передаються в глобальный массив всех машин.
// 3)Добавте несколько методов: скидка на машину, добавление года к названию.

// let globalCars = [];
// const carSale = function() {
// let cars = [];


// const addItem = function(name, color, price) {
// cars.push({name, color, price});
// if(cars.length === 5) {
//  globalCars = [...globalCars, ...cars.splice(0)];
//  console.log(globalCars);
// }
// }
// const discount = function() {
//   for (let el of cars) {
//     el.price *= 0.8;
//   }
// }
// const addYear = function(name, year) {
// for (let el of cars) {
//   el.name === name ? el.name = el.name + " " + year : '';
// }
// }
// const showArray = function() {
//   console.log(cars);
// }

// return {addItem, discount, addYear, showArray}
// }
//   let carName = carSale();

// carName.addItem("Renault", "white", 1000);
// carName.addItem("Ferrari", "red", 5000);
// carName.addItem("Porsche", "yellow", 6000);
// carName.addItem("Toyota", "white", 400);
// carName.addItem("Chevrolet", "black", 800);
// carName.discount();
// carName.addYear("Ferrari", 2015);
// carName.addYear("Toyota", 2018);
// carName.showArray();

// _________________________________________________________

// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().showStep();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
   
//   },
//   down() {
//     this.step--;
//     return this;
   
//   },
//   showStep: function() { 
//   console.log( this.step );
//   return this;
//   }
// };
// ladder.up().up().down().showStep();

// _____________________________________________________

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: 'Вася',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };


// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ________________________________________________________________

// Дан массив с числами(Написать самим). Ваша ф-я возвращает среднее арифметическое его элементов


// const filterArray = function(array) {
//   let sum = 0;


// for (let i = 0; i < array.length; i += 1 ) {
//   sum += array[i];
// } 
// return sum / array.length;
// }

// console.log(filterArray([25, 46, 74, 51]));   
// 49

// _____________________________________________________________

// Cоздайте ф-ю конструктор, ItemToSale принимающую параметрами (size, type, color)
//  и содержащую метод для ведения статистики продаж saveToSatatistics.

// let statistics = {
//     soldGeneral: 0,
//     soldTshirts: 0,
//     soldJackets: 0,
//     soldDresses: 0

// }
// const ItemToSale = function(size, type, color) {
//   this.size = size;
//   this.type = type;
//   this.color = color;

//   this.saveToStatistics = function() {
//     if (this.type === "tshirts") {
//     statistics.soldTshirts += 1;
//     statistics.soldGeneral += 1;
//   }
//    else if (this.type === "jackets") {
//     statistics.soldJackets += 1;
//     statistics.soldGeneral += 1;
//   }
//   else if (this.type === "dresses") {
//     statistics.soldDresses += 1;
//     statistics.soldGeneral += 1;
//   }
// }

// };
//   let tshirts = new ItemToSale("XS", "tshirts", "blue");
//   let jackets = new ItemToSale("S", "jackets", "black");
//   let dresses = new ItemToSale("L", "dresses", "white");


//   tshirts.saveToStatistics();
//   jackets.saveToStatistics();
//   dresses.saveToStatistics();

//   console.log(statistics);

// ______________________________________________________________
 

// Напишите ф-цию конструктор, которая будет создавать избирателя (name);
// У избирателя будет метод vote(presidentName) который будет менят глобальный объект
//  статистики голосов и добавлять туда ключ (имя избирателя) и значение (имя президента).
// Один избиратель голосует только один раз(!)
// В конце подсчитайте голоса и определите кто выиграл выборы

// const CreateVoter= function(name) {
//   this.name = name;

//   this.vote = function(presidentName) {

// }
// }

// ___________________________________________________________

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// const Calculator = function(){

//   this.read = function() {
//  this.number1= prompt(`Введите 1 число`)
//  this.number2= prompt(`Введите 2 число`)
//   }
//   this.sum = function() {
 
//     return + this.number1 + +this.number2;
//   }
//   this.mul = function() {
  
//     return + this.number1 * +this.number2;
//   }
// }

// let calculator = new Calculator();
// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// ___________________________________________________________


// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:

// class Worker {
  
//   constructor(name, surname, rate, days) {
// this.name = name;
// this.surname = surname;
// this.rate = rate;
// this.days = days;
// }
// getSalary = function() {
//   return this.rate * this.days
// }


// }

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// ______________________________________________________________

// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:

// class Worker {
  
//   constructor(name, surname, rate, days) {
// this._name = name;
// this._surname = surname;
// this._rate = rate;
// this._days = days;
// }
// getSalary = function() {
//   return this._rate * this._days;
// }
// get getName() {
//   return this._name
// }
// get getSurname() {
//   return this._surname
// }
// get getRate() {
//   return this._rate
// }
// get getDays() {
//   return this._days 
// }
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


// _________________________________________________

// Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// для свойства rate и для свойства days сделайте еще и методы-сеттеры. 
// Наш класс теперь будет работать так:

// class Worker {
  
//   constructor(name, surname, rate, days) {
// this._name = name;
// this._surname = surname;
// this._rate = rate;
// this._days = days;
// }
// getSalary = function() {
//   return this._rate * this._days;
// }
// get getName() {
//   return this._name
// }
// get getSurname() {
//   return this._surname
// }
// get getRate() {
//   return this._rate; 
// }
// get getDays() {
//   return this._days; 
// }
// set setRate(value) {
// return this._rate = value;
// }
// set setDays(value) {
//   return this._days = value;
// }
// }


// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getRate);
//  //выведет 10
//  console.log(worker.getDays);
// //выведет 31
// // worker.getSalary; //выведет 310 - то есть 10*31
// console.log(worker.getSalary());
// //Теперь используем сеттер:
// console.log(worker.setRate = 20); 
// //увеличим ставку
// console.log(worker.setDays = 10);
//  //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// ____________________________________________________

// Реализуйте класс MyString, 
// который будет иметь следующие методы: 
// метод reverse(), который параметром принимает строку, 
// а возвращает ее в перевернутом виде, метод ucFirst(), 
// который параметром принимает строку, а возвращает эту же строку, 
// сделав ее первую букву заглавной и метод ucWords, который принимает 
// строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:


// class MyString {
  
// reverse(str) {
  
//   return str.split("").reverse().join("");
 
// }
// ucFirst(str) {

//   return str[0].toUpperCase() + str.slice(1);
// }
// ucWords(str) {
// let array =  str.split(" ");
// let result = '';
// for (let el of array) {
//    result += el[0].toUpperCase() + el.slice(1) + " ";
   
// }
// return result
// }
// }

// const string = new MyString();

// console.log(string.reverse('abcde')); //выведет 'edcba'
// console.log(string.ucFirst('abcde')); //выведет 'Abcde'
// console.log(string.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// _______________________________________________________________________

// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

// ____________________________________________________________________


// const obj = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];


// console.log(obj[2][2]);
// ______________________________________________________________



// I)
// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.

// const findCentury = function(year) {
// const century = year / 100 +1;
// return((Math.floor(century)));

// }
// console.log(findCentury(2000));

// ______________________________________________________________________________

// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття

// const findCentury = function(year) {
// const century = year / 100 +1;
// return((Math.floor(century)));
//  }
// const fn = function() {
//  const years = [];
//  let askYear;
//   do {
//     askYear = prompt("Введите год");
//     askYear ===  null ? "" : years.push(askYear);
//     console.log(years);
//   }
//   while (askYear !==  null);
//   years.forEach((year) => console.log(`${year}`, `${findCentury(year)}`));
 
 
// }
// fn();

// ___________________________________________________________________________________

// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні

// const showYear = function(year) {

// return year % 4 === 0;
// }
// console.log(showYear(2000));

// ___________________________________________________________________________________

// const inventors = [{
//   first: 'Albert',
//   last: 'Einstein',
//   year: 1879,
//   passed: 1955
// },
// {
//   first: 'Isaac',
//   last: 'Newton',
//   year: 1643,
//   passed: 1727
// },
// {
//   first: 'Galileo',
//   last: 'Galilei',
//   year: 1564,
//   passed: 1642
// },
// {
//   first: 'Marie',
//   last: 'Curie',
//   year: 1867,
//   passed: 1934
// },
// {
//   first: 'Johannes',
//   last: 'Kepler',
//   year: 1571,
//   passed: 1630
// },
// {
//   first: 'Nicolaus',
//   last: 'Copernicus',
//   year: 1473,
//   passed: 1543
// },
// {
//   first: 'Max',
//   last: 'Planck',
//   year: 1858,
//   passed: 1947
// },
// {
//   first: 'Katherine',
//   last: 'Blodgett',
//   year: 1898,
//   passed: 1979
// },
// {
//   first: 'Ada',
//   last: 'Lovelace',
//   year: 1815,
//   passed: 1852
// },
// {
//   first: 'Sarah E.',
//   last: 'Goode',
//   year: 1855,
//   passed: 1905
// },
// {
//   first: 'Lise',
//   last: 'Meitner',
//   year: 1878,
//   passed: 1968
// },
// {
//   first: 'Hanna',
//   last: 'Hammarström',
//   year: 1829,
//   passed: 1909
// }
// ];
// - Вывести массив имён учёных/изобретателей
// const names = inventors.map(inventors => inventors.first);
// console.log(names);

// - Вывести массив тех кто родился в 19-ом веке
// const century = year / 100;
// const filteredCentury = inventors.filter(inventors => inventors.century);
// console.log(filteredCentury);

// - Вывести массив тех, кто прожил больше 50-ти лет
// - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// - Вывести фамилии тех, в чьём имени есть буква "е"
// - Получить массив объектов отсортированный по имени (по алфавиту).
// - Найти сумму лет жизни всех учёных
