"use strict";
/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)
*/
Object.defineProperty(exports, "__esModule", { value: true });
const findMissingLetter = (array) => {
    const charCodeArray = array.map((item) => item.charCodeAt(0));
    let missingLetter = '';
    for (let i = 0; i < charCodeArray.length - 1; i++) {
        if (charCodeArray[i] + 1 !== charCodeArray[i + 1]) {
            missingLetter = String.fromCharCode(charCodeArray[i] + 1);
            break;
        }
    }
    return missingLetter;
};
const array = ['a', 'b', 'c', 'd', 'f'];
const array2 = ['O', 'Q', 'R', 'S'];
console.log(findMissingLetter(array));
