const person = {
  firstName: "John",
  lastName: "Doe",
};
  
  function greet(message) {
    console.log(message + ", " + this. firstName ,this. lastName );}
    
  // Using call
  greet.call(person, "Hello"); // Output: "Hello, John Doe"
  
  // Using apply
  greet.apply(person, ["Hello"]); // Output: "Hello, John Doe"
  
  // Using bind 
  const greetJohn = greet.bind(person);
greetJohn("Hello"); // Output: "Hello, John Doe"
greetJohn("Hello00"); // Output: "Hello, John Doe"