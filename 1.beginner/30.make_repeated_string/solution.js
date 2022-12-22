// 제한사항 : 2 ≤ my_string 길이 ≤ 5 , 2 ≤ n ≤ 10 , my_string 은 영어 대소문자로 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  isValid(my_string, n); // 유효성 검사
  return my_string
    .split("")
    .map((e) => Array.from({ length: n }, () => e).join(""))
    .join("");
}

function isValid(my_string, n) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  if (n < 2 || n > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (my_string.length < 2 || my_string.length > 5) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
