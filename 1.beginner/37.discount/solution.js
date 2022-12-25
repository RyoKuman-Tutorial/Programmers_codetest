// 제한사항 : 10 ≤ price ≤ 1,000,000 , price는 10원 단위로(1의 자리가 0) 주어집니다 , 소수점 이하를 버린 정수를 return합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  isValid(price);
  const discount = price >= 100000 ? (price >= 300000 ? (price >= 500000 ? 20 : 10) : 5) : 0;
  return Math.floor(price * (1 - discount / 100));
}

function isValid(price) {
  // 유효성 검사
  if (price < 10 || price > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (price % 10 !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
