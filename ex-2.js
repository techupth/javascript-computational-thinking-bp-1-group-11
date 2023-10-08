function countVowels(words) {
  // Start coding here
  let vowelsCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A','E','I','O','U']
  for (let char of words) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }
  return vowelsCount
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

console.log(countVowels("Hello World"))
console.log(countVowels("TechUp"))