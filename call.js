function greet(message) {
    console.log(message + " " + this.name);
  }
  
  var person = {
    name: "John",
  };
  
  greet.call(person, "Hello"); // Output: Hello John
  