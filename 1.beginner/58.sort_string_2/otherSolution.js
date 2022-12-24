// 제한사항 : 0 < my_string 길이 < 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  validator(my_string);
  return [...my_string.toLowerCase()].sort().join(""); // split 사용하지 않은 방법
}

function validator(my_string) {
  // 유효성 검사
  if (my_string.length <= 0 || my_string.length >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
