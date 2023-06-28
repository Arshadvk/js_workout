function greet(message) {
    console.log(message + " " + this.name);
  }
  
  var person = {
    name: "John",
  };
  
  var boundGreet = greet.bind(person, "Hello");
  boundGreet(); // Output: Hello John
  