// 제한사항 : 0 ≤ num1 ≤ 10,000 , 0 ≤ num2 ≤ 10,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120807

function solution(num1, num2) {
  isValid(num1, num2); // 유효성 검사
  return num1 === num2 ? 1 : -1;
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (0 > value || 10000 < value) {
      return new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
