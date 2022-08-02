// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// Task 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Task 2
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is cruising at ${this.speed}km/h`);
};

// Task 3
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is breaking; current speed: ${this.speed}km/h`);
};

// Task 4
const bmw = new Car("BMW", 120);
const merc = new Car("Mercedes-Benz", 95);

merc.accelerate();
merc.accelerate();
bmw.brake();
