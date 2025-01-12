/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Lets Normalize the str i.e, removing extra characters
  let filteredStr = '';
  for(let i = 0; i < str.length; i++){
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9')){
      filteredStr += str[i].toLowerCase();
    }
  } 

  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] != filteredStr[right]) {
      return false;
    } 
      left++;
      right--;
  }

  return true;
}

module.exports = isPalindrome;
