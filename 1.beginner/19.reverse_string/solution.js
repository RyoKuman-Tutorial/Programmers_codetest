// 제한사항 : 1 ≤ my_string의 길이 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
  isValid(my_string); // 유효성 검사
  return my_string
    .split("")
    .reverse()
    .reduce((result, value) => result + value, "");
}

function isValid(my_string) {
  // 유효성 검사
  if (my_string.length < 1 || my_string.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
