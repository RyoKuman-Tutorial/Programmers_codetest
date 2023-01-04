function circular_permutation(n) {
  return fac(n - 1);
}

function fac(n) {
  return n ? n * fac(n - 1) : 1;
}
