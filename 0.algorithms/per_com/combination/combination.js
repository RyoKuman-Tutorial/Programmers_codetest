function combination(n, r) {
  return premutation(n, r) / factorial(r);
}

function premutation(n, r) {
  return Array.from({ length: n - r + 1 }, (_, i) => n - i).reduce((a, b) => a * b);
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
