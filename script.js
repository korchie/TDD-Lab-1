"use strict";

// function pigLatinTranslator(string){
//     let vowels = ["a", "e", "i", "o", "u"];
//     let newString = "";
//     let upperCaseVowel = ["A", "E", "I", "O", "U"];

//     if (vowels.indexOf(string[0]) > -1) {
//         newString = string + "way";
//     } else {
//         let firstMatch = string.match(/[aeiou]/g) || 0;
//         let vowel = string.indexOf(firstMatch[0]);
//         newString = string.substring(vowel) + string.substring(0, vowel) + "ay";
//         return newString;
//     }
    
//     if (string = upperCaseVowel) {
//         return 
//     }

// }
// pigLatinTranslator("hello");

const pigLatin = (word) => {
    // if words starts with a vowel
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(word[0])) {

        return word + "way";
    } else { // if the word starts with a consonant
        // console.log("starts with a consonant");
        
        // make a variable to hold the prefix of the word
        let prefix = "";
        // loop thru the word until we see a vowel, while adding consonants to our prefix variable
        for (let i = 0; i < word.length; i++) {
            // if this is a consonant
            if (!vowels.includes(word [i])) {
                prefix += word[i];
            }
            // else we're on a vowel
            else {
                return word.slice(i) + prefix + "ay";
            }
        }
    }
}

module.exports = pigLatin;