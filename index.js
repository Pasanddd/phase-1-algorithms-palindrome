// index.js

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}

module.exports = isPalindrome; // exporting the function
