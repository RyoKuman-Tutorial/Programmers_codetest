// 제한사항 : 0 ≤ n ≤ 1,000,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  isValid(n);
  return String(n)
    .split("")
    .reduce((a, b) => Number(b) + a, 0);
}

function isValid(n) {
  // 유효성 검사
  if (n < 0 || n > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
