// 제한사항 : 0 < num1 ≤ 100 , 0 < num2 ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1, num2) {
  isValid(num1, num2); // 유효성 검사
  const answer = (num1 / num2) * 1000;
  return Math.floor(answer); // Math.floor 활용하여, 정수부만 return
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (typeof value !== "number" || value <= 0 || value > 100) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
