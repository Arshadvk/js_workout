const MyModule = (function() {
  // Private members
  let privateVariable = 'This is private';

  function privateMethod() {
    console.log('This is a private method');
  }

  // Public API
  return {
    publicVariable: 'This is public',

    publicMethod: function() {
      console.log('This is a public method');
      // Access private members
      console.log(privateVariable);
      privateMethod();
    }
  };
})();

// Usage
console.log(MyModule.publicVariable); // Output: This is public
MyModule.publicMethod(); // Output: This is a public method
                          //         This is private
                          //         This is a private method
