// 제한사항 : sides의 원소는 자연수입니다 , sides의 길이는 2입니다 , 1 ≤ sides의 원소 ≤ 1,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  validator(sides);
  return Math.min(...sides) * 2 - 1; // readme 참조
}

function validator(sides) {
  if (sides.filter((e) => !Number.isInteger(e) || e <= 0).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (sides.length !== 2) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (sides.filter((e) => e < 1 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
