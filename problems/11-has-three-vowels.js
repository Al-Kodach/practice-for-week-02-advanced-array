/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    const words = string.split(' ');
    let vowels = 'aieou';

    const threeOrMoreVowels = words.filter(word  => {
     return word.split('').forEach(el => vowels.includes(el))

    });

    return threeOrMoreVowels;
};

function vowelsCounter(word) {
    const word = string.split('');
    let vowels = 'aieou';

    const count = word.forEach(el => vowels.includes(el),[]);
    return count;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
