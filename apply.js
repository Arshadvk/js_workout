function greet(message) {
    console.log(message + " " + this.name);
  }
  
  var person = {
    name: "John",
  };
  
  greet.apply(person, ["Hello"]); // Output: Hello John
  