const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let mostExpensiveProduct = []
  for (let i = 0; i < products.length; i++ ) {
    if (products[i].price > mostExpensiveProduct) {
      mostExpensiveProduct.push(products[i])
    }
  }
  return mostExpensiveProduct
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
console.log(getMostExpensiveProduct(products));