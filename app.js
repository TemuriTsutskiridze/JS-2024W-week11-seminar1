// 1. შექმენით მანქანის პროტოტიპი, რომელსაც ექნება ძირითადი მახასიათებლები (მაგ: ბორბლების რაოდენობა, start მეთოდი). ამ პროტოტიპის გამოყენებით შექმენით რამდენიმე ბრენდის მანქანის ობიექტი სიჩქარის ფროფერთით.

// const car = {
//   wheels: 4,
//   start() {
//     return "Car is starting";
//   },
// };

// function createNewCar(speed) {
//   let newCar = Object.create(car);
//   newCar.speed = speed;
//   return newCar;
// }

// let BMW = createNewCar(250);
// console.log(BMW.start());

// let mercedes = createNewCar(200);
// console.log(mercedes.wheels);

// class Car {
//   constructor(speed) {
//     this.wheels = 4;
//     this.speed = speed;
//   }

//   start() {
//     return "Car is starting";
//   }
// }

// const car1 = new Car(100);
// console.log(car1);

// 2. Create a set of JavaScript classes to represent different shapes (e.g., Circle, Square, and Triangle). Each shape class should have a method named calculateArea() that calculates and returns the area of that shape. Use polymorphism to ensure that you can call calculateArea() on any shape object, regardless of its specific class.

// class Shape {
//   calculateArea() {
//     return;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// const circle1 = new Circle(10);
// console.log(circle1.calculateArea());

// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   calculateArea() {
//     return this.side ** 2;
//   }
// }

// const squre1 = new Square(3);
// console.log(squre1.calculateArea());

// class Trinalge extends Shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   calculateArea() {
//     return 0.5 * this.base * this.height;
//   }
// }

// const triangle1 = new Trinalge(10, 5);
// console.log(triangle1.calculateArea());
// console.log(triangle1);

// 3. Create a JavaScript class representing a bank account with private properties for the account holder's name and balance. Implement methods to deposit and withdraw funds, ensuring that the balance is updated securely. Use encapsulation to hide the internal details of the bank account and provide controlled access to its properties.

// class BankAccount {
//   #name;
//   #balance;

//   constructor(name, balance) {
//     this.#name = name;
//     this.#balance = balance;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(newName) {
//     this.#name = newName;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     this.#balance = newBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       return "გამოსატანი თანხა აღემატება არებულ ბალანსს";
//     }
//     this.#balance -= amount;
//   }
// }

// const person1 = new BankAccount("temo", 100);

// console.log(person1.name);

// person1.name = "beqa";
// console.log(person1.name);
// person1.deposit(100);
// console.log(person1.balance);

// console.log(person1.withdraw(1500));
// console.log(person1.balance);
