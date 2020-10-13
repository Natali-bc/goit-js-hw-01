// // Задача 1
//  const Account = function(login, email) {
//   this.login = login;
//   this.email = email;
  
//   this.getInfo = function() {
   
//    return `login : ${this.login}, email: ${this.email}`;
//   }
//     }
//     Account.prototype.getInfo = function() {
  
//     }
  
//   console.log(typeof Account.prototype.getInfo);
//   // 'function'
  
//   const mango = new Account( 'Mangozedog', 'mango@dog.woof');
//   console.log(mango.getInfo()); 
//   // 'login : Mangozedog, email: mango@dog.woof'
  
//   const poly = new Account( 'Poly', 'poly@mail.com');
//   console.log(poly.getInfo());
//   // 'login : Poly, email: poly@mail.com'
// ______________________________________________________

  // Задача 2

// class User {
//   constructor(name, age, followers) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;

//   this.getInfo = function() {
//    return `User ${name} is ${age} years old and has ${followers} followers`;
//   }
// }
// }

// User.prototype.getInfo = function() {
  
//   }

// console.log(typeof User);
// // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); 
// // 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// // 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

// _____________________________________________________________

  // Задача 3

//   class Storage {
//       constructor(items) {
//       this.items = items;  
// } 

//       getItems() { 
//         return this.items
//       }

//      addItem(item) {
//      return this.items.push(item)
//     }
//       removeItem(item) {
//     let index =  this.items.indexOf(item);
//     if (index >= 0) {
//       return this.items.splice(index, 1)
//     }
//     }
//   }

// console.log(typeof Storage);
// // 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// _____________________________________________________________

  // Задача 4
  
//   class StringBuilder {
//     constructor(value) {
//       this.value = value;
//     }

//     get val() {
//       return this.value;
//     }


//     append(str) {
//       this.value += str;
//     }

//     prepend(str) {
//       this.value = str + this.value;
//     }
//     pad(str) {
//       this.append(str);
//       this.prepend(str);
      

//     }
//   }

//   console.log(typeof StringBuilder);
// // 'function'


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// ___________________________________________________________


  // Задача 5

  // class Car {
  //   // Write code under this line

  //   static getSpecs(car){
  //     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  //   }
  //   constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
  //    this.speed = speed;
  //    this._price = price;
  //    this.maxSpeed = maxSpeed;
  //    this.isOn = isOn;
  //    this.distance = distance;
  //   }
  //   get price() {
  //     return this._price;
  //   }
  //   set price(value) {
  //   return (this._price = value);
  //   }
  //   turnOn() {
  //     return (this.isOn = true);
  //   }
  //   turnOff() {
  //    this.isOn = false;
  //    this.speed = 0;
  //    return;
  //   }
  //   accelerate(value) {
  //     if (value + this.speed < this.maxSpeed) {
  //      this.speed += value;
  //     }
  //     else {
  //       this.speed = this.maxSpeed;
  //     }
  //   }
  //   decelerate(value) {
  //    if (this.speed - value >= 0) {
  //      this.speed -= value;
  //   }
  //     else {
  //       this.speed = 0;
  //     }
  //   }
  //   drive(hours) {
  //     if (this.isOn === true) {
  //       this.distance += hours * this.speed;
  //     }
  //   }
  //  }
    
  //  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  //  mustang.turnOn();
  //  mustang.accelerate(50);
  //  mustang.drive(2);
   
  //  console.log(Car.getSpecs(mustang));
  //  // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
  //  mustang.decelerate(20);
  //  mustang.drive(1);
  //  mustang.turnOff();
   
  //  console.log(Car.getSpecs(mustang));
  //  // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
  //  console.log(mustang.price); // 2000
  //  mustang.price = 4000;
  //  console.log(mustang.price); // 4000