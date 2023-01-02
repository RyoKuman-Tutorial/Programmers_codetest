// 제한사항 : 1 ≤ num ≤ 100 , 0 ≤ total ≤ 1000 , num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  validator(num, total);
  const num1 = Array.from({ length: num }, (_, i) => i).reduce((a, b) => a + b, 0);
  const num2 = (total - num1) / num;
  return Array.from({ length: num }, (_, i) => i + num2);
}

function validator(num, total) {
  if (num < 1 || num > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (total < 0 || total > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
