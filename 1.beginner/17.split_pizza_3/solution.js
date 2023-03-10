// 제한사항 : 2 ≤ slice ≤ 10 , 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  isValid(slice, n); // 유효성 검사
  return Math.floor(n / slice) + (n % slice === 0 ? 0 : 1);
}

function isValid(slice, n) {
  // 유효성 검사
  if (!Number.isInteger(slice) || slice < 2 || slice > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (!Number.isInteger(n) || n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
