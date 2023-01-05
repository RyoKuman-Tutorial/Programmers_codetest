function permutation(n, r) {
  return Array.from({ length: n - r + 1 }, (_, i) => n - i).reduce((a, b) => a * b);
}
