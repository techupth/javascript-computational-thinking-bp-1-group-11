let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  // Start coding here
}let result = [];
numbers.forEach(function(number) {
  let newNumber = number + amount;
  result.push(newNumber);
}); return result;


let result1 = addNumber(numbers, 10); // Output: [20, 30, 40]
let result2 = addNumber(anotherNumbers, 2); // Output: [4, 6, 8]

console.log(result1); 
console.log(result2); 