// 제한사항 : 0 < n ≤ 3,628,800
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120848

function factorial(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
}

function solution(n) {
  validator(n);
  let i = 0; // 0
  while (n >= factorial(i)) i++;
  return i - 1; // 조건문은 조건이 맞지 않을 때 탈출하기에 1을 빼준다.
}

function validator(n) {
  // 유효성 검사
  if (n <= 0 || n > 3628800) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
