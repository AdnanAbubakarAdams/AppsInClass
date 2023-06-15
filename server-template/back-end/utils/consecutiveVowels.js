function consecutiveVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let currentIndex = 0;
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === vowels[currentIndex]) {
      currentIndex = currentIndex + 1 > 4 ? 0 : currentIndex + 1;
      count++;
    }
  }
  return count;
}

module.exports = consecutiveVowels;