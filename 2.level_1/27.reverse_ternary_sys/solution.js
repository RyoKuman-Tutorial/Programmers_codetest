function solution(n) {
  let terSys = [];

  while (n !== 0) {
    terSys.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  return terSys.reduce((acc, cur, idx) => acc + cur * 3 ** idx, 0);
}
