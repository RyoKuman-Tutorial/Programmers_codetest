// 제한사항 : 1 ≤ balls ≤ 30 , 1 ≤ share ≤ 30 , 구슬을 고르는 순서는 고려하지 않습니다 , share ≤ balls
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls, share) {
  validator(balls, share);
  const n1 = Array.from({ length: balls - share }, (_, i) => i + share + 1).reduce((acc, cur) => acc * cur, 1);
  const n2 = Array.from({ length: balls - share }, (_, i) => i + 1).reduce((acc, cur) => acc * cur, 1);
  return n1 / n2;
}

function validator(balls, share) {
  if (balls < 1 || balls > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (share < 1 || share > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (share > balls) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
