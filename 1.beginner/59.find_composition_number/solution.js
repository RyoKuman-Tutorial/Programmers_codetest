// 제한사항 : 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120846

function getNumberOfFactor(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((e) => n % e === 0).length;
}

function solution(n) {
  validator(n);
  return Array.from({ length: n }, (_, i) => i + 1).filter((e) => getNumberOfFactor(e) > 2).length;
}

function validator(n) {
  // 유효성 검사
  if (n < 0 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
