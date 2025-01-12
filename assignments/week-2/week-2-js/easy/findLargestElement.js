/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNum = numbers[0];
    for(let num = 0; num < numbers.length; num++) {
        if (largestNum < numbers[num]) {
            largestNum = numbers[num];
        }
    }
    return largestNum;
    
}

module.exports = findLargestElement;