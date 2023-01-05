function P(n, k) {
  if (n === k || k === 1) return 1;
  return P(n - 1, k - 1) + k * P(n - 1, k);
}
