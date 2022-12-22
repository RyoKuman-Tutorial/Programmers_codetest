// 제한사항 : 0 < money ≤ 1,000,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  isValid(money); // 유효성 검사
  return [Math.floor(money / 5500), money % 5500];
}

function isValid(money) {
  // 유효성 검사
  if (money <= 0 || money > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
