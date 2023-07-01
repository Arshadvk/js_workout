function add(x) {
    return function(y) {
      return x + y;
    }
  }
  
  // Currying the add function
  const addFive = add(5);
  
  // Using the curried function
  console.log(addFive(2)); // Output: 7
  console.log(addFive(10)); // Output: 15


  
  