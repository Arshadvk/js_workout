class Vehicle {
    constructor(name) {
      this.name = name;
    }
  
    start() {
      console.log(`${this.name} is starting...`);
    }
  
    stop() {
      console.log(`${this.name} is stopping...`);
    }
  }
  
  class Car extends Vehicle {
    accelerate() {
      console.log(`${this.name} is accelerating...`);
    }
  }
  
  const car = new Car("Toyota");
  car.start();      // Output: Toyota is starting...
  car.accelerate(); // Output: Toyota is accelerating...
  car.stop();       // Output: Toyota is stopping...
  