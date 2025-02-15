function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return foo(a - 1, b - 1);
  }
}

console.log(foo(5, 5)); // 0
console.log(foo(10, 0)); // 10
console.log(foo(0, 10)); // 10
console.log(foo(0, 0)); // 0