// 제한사항 : 1 ≤ order ≤ 1,000,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  validator(order);
  return order.toString().replaceAll(/[^369]/g, "").length;
}

function validator(order) {
  // 유효성 검사
  if (order < 1 || order > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
