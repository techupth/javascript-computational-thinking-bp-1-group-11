function getLetterFrequency(words) {
  // Start coding here
  const letters = {};
  for (let char of str.toLowerCase()) {
      letters[char] = letters[char] + 1 || 1;
  }
  return letters
}

const str = "Techupth";

getLetterFrequency(str);
console.log(getLetterFrequency(str))
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
