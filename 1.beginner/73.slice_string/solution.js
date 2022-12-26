// 제한사항 : 1 ≤ my_str의 길이 ≤ 100 , 1 ≤ n ≤ my_str의 길이 , my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  validator(my_str, n);
  return Array.from({ length: Math.ceil(my_str.length / n) }, (_, idx) =>
    [...my_str].slice(n * idx, n * (idx + 1)).join("")
  );
}

function validator(my_str, n) {
  if (my_str.length < 1 || my_str.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (n < 1 || n > my_str.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (/[^a-zA-Z0-9]/.test(my_str)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
