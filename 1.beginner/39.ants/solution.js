// 제한사항 : hp는 자연수입니다 , 0 ≤ hp ≤ 1000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(hp) {
  isValid(hp); // 유효성 검사
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

function isValid(hp) {
  // 유효성 검사
  if (hp < 0 || hp > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!Number.isInteger(hp)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
