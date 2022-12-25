// 제한사항 : sides의 원소는 자연수입니다 , sides의 길이는 3입니다 , 1 ≤ sides의 원소 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
  isValid(sides); // 유효성 검사
  sides.sort();
  if (sides[2] < sides[1] + sides[0]) return 1;
  else return 2;
}

function isValid(sides) {
  // 유효성 검사
  if (sides.length !== 3) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (sides.filter((e) => !Number.isInteger(e) || e > 1000 || e < 1).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
