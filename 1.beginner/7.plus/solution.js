// 제한사항 : -50000 ≤ num1 ≤ 50000 , -50000 ≤ num2 ≤ 50000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120802

function solution(num1, num2) {
  isValid(num1, num2); // 유효성 검사
  return num1 + num2;
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (typeof value !== "number" || value < -50000 || value > 50000) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
