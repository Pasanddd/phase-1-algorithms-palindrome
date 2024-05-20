// indexTest.js

const isPalindrome = require('./index'); // importing the function from index.js
const assert = require('assert'); // importing the assert module

// Test cases
assert.strictEqual(isPalindrome("madam"), true); // true
assert.strictEqual(isPalindrome("robot"), false); // false
assert.strictEqual(isPalindrome("level"), true); // true
assert.strictEqual(isPalindrome("hello"), false); // false

console.log("All test cases passed successfully!");
