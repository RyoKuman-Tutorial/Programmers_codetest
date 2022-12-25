// 제한사항 : 1 ≤ n ≤ 10 , 1 ≤ t ≤ 15
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n, t) {
  isValid(n, t); // 유효성 검사
  return n * 2 ** t;
}

function isValid(n, t) {
  // 유효성 검사
  if (n < 1 || n > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (t < 1 || t > 15) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
