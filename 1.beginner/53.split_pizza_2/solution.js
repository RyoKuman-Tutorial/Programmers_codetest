// 제한사항 : 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  validator(n);
  return Math.min(...Array.from({ length: n }, (_, i) => i + 1).filter((e) => (e * 6) % n === 0));
}

function validator(n) {
  // 유효성 검사
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
