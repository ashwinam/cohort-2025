/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

class sortedStr {
  constructor (str) {
    this.str = str;
  }

  sort (){
    return this.str.split("").sort().join("");
  }
}

function isAnagram(str1, str2) {

  sortedStr1 = new sortedStr(str1.toLowerCase()).sort();
  sortedStr2 = new sortedStr(str2.toLowerCase()).sort();
  
  return sortedStr1 === sortedStr2;

}

isAnagram("spAr", "rAsP")

module.exports = isAnagram;
