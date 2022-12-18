// 제한사항 : 0 < n ≤ 1000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  isValid(n); // 유효성 검사
  const evenNumbers = evenNumberGetter(n);
  return evenNumbers.reduce((total, num) => total + num, 0); // Array.reduce 이용, 모든 수를 더한다.
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (typeof value !== "number" || value <= 0 || value > 1000 || !Number.isInteger(value)) {
      return new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}

function evenNumberGetter(n) {
  // 정수 n이 주어질 때, n이하의 짝수를 모두 구한다.
  const evenNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) evenNumbers.push(i);
  }

  return evenNumbers;
}
