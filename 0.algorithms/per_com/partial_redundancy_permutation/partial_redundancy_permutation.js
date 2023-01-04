function permutation(n, same) {
  // n은 총 수, same 은 같은것들의 배열
  return fac(n) / same.reduce((acc, cur) => acc * fac(cur), 1);
}

function fac(n) {
  return n ? n * fac(n - 1) : 1;
}
