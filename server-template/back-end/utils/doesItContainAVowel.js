// Write a fuction that checks a string if it contains a vowel

function doesItContainAVowel(words) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      return true;
    }
  }
  return false;
};

module.exports = doesItContainAVowel;
