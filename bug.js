function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Add the numbers
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10
console.log(foo(NaN, 5)); //Output: NaN
console.log(foo(5, NaN)); //Output: NaN