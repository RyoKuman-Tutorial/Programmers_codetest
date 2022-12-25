// 제한사항 : 2 ≤ numbers의 길이 ≤ 30 , 0 ≤ numbers의 원소 ≤ 1,000 , 0 ≤num1 < num2 < numbers의 길이
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120833

function solution(numbers, num1, num2) {
  isValid(numbers, num1, num2); // 유효성 검사
  return numbers.slice(num1, num2 + 1);
}

function isValid(numbers, num1, num2) {
  // 유효성 검사
  if (numbers.length < 2 || numbers.length > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (numbers.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (num1 < 0 || num1 >= num2 || num2 >= numbers.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
