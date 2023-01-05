function combination(n, r) {
  return factorial(n - 1 + r) / (factorial(n - 1) * factorial(r));
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
