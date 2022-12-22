// 제한사항 : 0 ≤ numbers의 원소 ≤ 10,000 , 2 ≤ numbers의 길이 ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers) {
  isValid(numbers); // 유효성 검사
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

function isValid(numbers) {
  // 유효성 검사
  if (numbers.length < 2 || numbers.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (numbers.filter((e) => e < 0 || e > 10000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
