// 제한사항 : 0 < my_string 길이 < 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  validator(my_string);
  return my_string
    .toLowerCase()
    .split("")
    .sort((a, b) => a.charCodeAt() - b.charCodeAt()) // sort 는 기본적으로 아스키 코드로 정렬시키기에 사실 아무것도 전달하지 않더라도, 잘 동작한다
    .join("");
}

function validator(my_string) {
  // 유효성 검사
  if (my_string.length <= 0 || my_string.length >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
