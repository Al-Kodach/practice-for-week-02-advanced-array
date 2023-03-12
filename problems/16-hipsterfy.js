/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // get vowels to check for vowels in word;
    const vowels = 'aeiou';

    // iterate word from end;
    for(let i = word.length - 1; i >= 0 ; i--) {
        let char = word[i];

        //check if a char is a vowel;
        if(vowels.includes(char)) {
            // let stop the loop and return the results
            // slice word from start(inclusive) to end(exclusive) and join to start to end;
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

};

let hipsterfy = function(sentence) {
    // convert string to array and pass each word to removeVowel fn
    return sentence.split(' ').map(removeLastVowel).join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
