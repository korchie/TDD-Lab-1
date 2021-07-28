"use strict";

const pigLatin = (word) => {
    // if words starts with a vowel
    const vowels = ["a", "e", "i", "o", "u"];
    word = word.toLowerCase();
    
    if (vowels.includes(word[0])) {

        return word + "way";
    } else { // if the word starts with a consonant
        // console.log("starts with a consonant");
        
        // make a variable to hold the prefix of the word
        let prefix = "";
        // loop thru the word until we see a vowel, while adding consonants to our prefix variable
        for (let i = 0; i < word.length; i++) {
            // if this is a consonant
            if (!vowels.includes(word[i])) {
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