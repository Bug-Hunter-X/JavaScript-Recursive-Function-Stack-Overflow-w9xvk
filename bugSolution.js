function foo(a, b) {
  while (a !== 0 && b !== 0) {
    a--;
    b--;
  }
  return a + b; 
}

console.log(foo(5, 5)); // 0
console.log(foo(10, 0)); // 10
console.log(foo(0, 10)); // 10
console.log(foo(0, 0)); // 0