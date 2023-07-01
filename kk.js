const str = "Hello, World!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str.charAt(i);
}

console.log(reversedStr); // Output: "!dlroW ,olleH"
