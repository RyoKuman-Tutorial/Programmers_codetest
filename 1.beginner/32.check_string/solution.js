// 제한사항 : 1 ≤ str1의 길이 ≤ 100 , 1 ≤ str2의 길이 ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120908

function solution(str1, str2) {
  isValid(str1, str2); // 유효성 검사
  return str1.includes(str2) ? 1 : 2;
}

function isValid(...values) {
  // 유효성 검사
  if (values.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
