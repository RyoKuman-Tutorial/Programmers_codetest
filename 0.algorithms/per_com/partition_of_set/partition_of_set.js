function S(n, k) {
  if (n === k || k === 1) return 1;
  return S(n - 1, k - 1) + k * S(n - 1, k);
}
