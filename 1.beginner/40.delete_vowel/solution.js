// 제한사항 : my_string은 소문자와 공백으로 이루어져 있습니다 , 1 ≤ my_string의 길이 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  isValid(my_string); // 유효성 검사
  return my_string.replace(/[a|e|i|o|u]/g, "");
}

function isValid(my_string) {
  // 유효성 검사
  const regex = /^[a-z|\s]+$/;
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (my_string.length < 1 || my_string.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
