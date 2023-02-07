function solution(a, b) {
  return a.reduce((acc, _, i) => a[i] * b[i] + acc, 0);
}
