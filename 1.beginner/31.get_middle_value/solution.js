// 제한사항 : array의 길이는 홀수입니다 , 0 < array의 길이 < 100 , -1,000 < array의 원소 < 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  isValid(array); // 유효성 검사
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

function isValid(array) {
  // 유효성 검사
  if (array.length % 2 === 0 || array.length <= 0 || array.length >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (array.filter((e) => e <= -1000 || e >= 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
