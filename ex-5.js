function getLetterFrequency(words) {
  // Start coding here
} const letterFrequency = {};
const lowercasedWords = words.toLowerCase();
for (const char of lowercasedWords) { if (/^[a-zA-Z]$/.test(char)) { letterFrequency[char] = (letterFrequency[char] || 0) + 1;
    }
  } return letterFrequency;

const str = "Techupth";
const result = getLetterFrequency(str);
console.log(result);
getLetterFrequency(str);

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
