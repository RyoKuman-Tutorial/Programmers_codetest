// 제한 사항 : 1 ≤ b < a ≤ n ≤ 1,000,000 , 정답은 항상 int 범위를 넘지 않게 주어집니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  validator(a, b, n);
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}

function validator(a, b, n) {
  if (b < 1 || b >= a) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (a <= b || a > n) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (n < a || n > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
