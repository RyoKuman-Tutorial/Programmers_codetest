function necklace_permutation(n) {
  return fac(n - 1) / 2;
}

function fac(n) {
  return n ? n * fac(n - 1) : 1;
}
