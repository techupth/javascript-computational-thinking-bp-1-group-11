function countVowels(words) {
  // Start coding here
}
let vowelCount = 0;
words = words.toLowerCase();
for (let i = 0; i < words.length; i++) {
    let currentChar = words[i];
if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') { vowelCount++;
    }
  }  return vowelCount;

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2
