// 제한사항 : 0 < num1 ≤ 100 , 0 < num2 ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120810

function solution(num1, num2) {
  isValid(num1, num2); // 유효성 검사
  return num1 % num2;
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (value <= 0 || value > 100) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
