"use strict";

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   this.calcAge = function () {
//   //     console.log(2022 - this.birthYear);
//   //   };
// };
// const stevo = new Person("Stevo", 1985);
// console.log(stevo);

// const matilda = new Person("Matilda", 1995);
// const jack = new Person("Jack", 1998);
// console.log(matilda, jack);
// console.log(stevo instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// stevo.calcAge();

// Classes
// class expression
// const PersonCl  = class {}

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }
//   set year(y) {
//     this.birthYear = y;
//   }

//   static hey() {
//     console.log("Hey there!");
//   }
// }
// const jessica = new PersonCl("Jessica", 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.age);
// jessica.year = 1984;
// console.log(jessica);

// PersonCl.hey();
// stevo.hey();

/////////////////////////////////////////////
// Inheritance: Constructor functions
/////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`Hi, I'm ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student("Mike", 1991, "JavaScript");
// mike.introduce();
// mike.calcAge();
// console.log(mike);

/////////////////////////////////////////////
// Inheritance: Object.create
/////////////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init("Jay", 2000, "K");
// jay.introduce();
// jay.calcAge();

////////////////////////////////////////////////////
// Classes
////////////////////////////////////////////////////
class Account {
  // Public fields
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //   Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan of ${val} approved`);
    }
    return this;
  }

  //   Private methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log("Help provided");
  }
}
const stevoAcc = new Account("Stevo", "KM", 1111);
// stevoAcc.movements.push(1000);
stevoAcc.deposit(1000);
stevoAcc.withdraw(200);
stevoAcc.requestLoan(10_000);
console.log(stevoAcc.getMovements());

console.log(stevoAcc);
// console.log(stevoAcc.#movements);
// console.log(stevoAcc.#pin);
// console.log(stevoacc.#approveLoan(100));
Account.helper();

/////////////////////////////////////////////////////
// Chaining methods
/////////////////////////////////////////////////////
stevoAcc
  .deposit(300)
  .deposit(500)
  .withdraw(100)
  .requestLoan(2000)
  .withdraw(1000);
