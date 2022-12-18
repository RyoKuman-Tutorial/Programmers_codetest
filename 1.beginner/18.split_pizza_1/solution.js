// 제한사항 : 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(n) {
  isValid(n); // 유효성 검사
  return Math.ceil(n / 7);
}

function isValid(n) {
  // 유효성 검사
  if (!Number.isInteger(n) || n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
