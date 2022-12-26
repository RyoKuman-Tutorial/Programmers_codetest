// 제한사항 : 2 ≤ n ≤ 10,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  validator(n);
  const primes = getPrimes(n);
  const divisors = getDivisor(n);
  const result = new Set(divisors.filter((e) => primes.includes(e)));

  return [...result];
}

function validator(n) {
  if (n < 2 || n > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}

function getPrimes(n) {
  const arr = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) if (arr[i]) for (let j = i * i; j <= n; j += i) arr[j] = false;
  return arr.reduce((acc, cur, idx) => (cur ? [...acc, idx] : acc), []);
}

function getDivisor(n) {
  const arr = Array.from({ length: Math.ceil(Math.sqrt(n)) }, (_, i) => i + 1);
  return arr.reduce((acc, cur) => (n % cur === 0 ? [...acc, cur, n / cur] : acc), []);
}
