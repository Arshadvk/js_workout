function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  const curriedAdd = add(2)(3); // Partial application of arguments
  console.log(curriedAdd(4)); // Outputs: 9
  