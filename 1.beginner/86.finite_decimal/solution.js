// 제한사항 : a, b는 정수 , 0 < a ≤ 1,000 , 0 < b ≤ 1,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  validator(a, b);
  const aDivisor = getDivisor(a);
  const bDivisor = getDivisor(b);
  aDivisor.forEach((e) => {
    if (bDivisor.includes(e)) {
      bDivisor[bDivisor.indexOf(e)] = false;
      aDivisor[aDivisor.indexOf(e)] = false;
    }
  });
  const result = bDivisor.filter((e) => e);
  return result.filter((e) => /[^25]/.test(e)).length === 0 ? 1 : 2;
}

function getDivisor(num) {
  const primes = getPrimes(num).filter((e) => num % e === 0);
  const arr = [];

  while (num !== 1) {
    primes.forEach((v) => {
      if (num % v === 0) {
        arr.push(v);
        num = num / v;
      }
    });
  }

  return arr;
}

function getPrimes(num) {
  const arr = Array.from({ length: num + 1 }, () => true).fill(false, 0, 2);
  for (let i = 2; i * i <= num; i++) if (arr[i]) for (let j = i * i; j <= num; j += i) arr[j] = false;
  return arr.map((v, i) => (v ? i : false)).filter((e) => e);
}

function validator(a, b) {
  if (a <= 0 || a > 1000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (b <= 0 || b > 1000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
}
