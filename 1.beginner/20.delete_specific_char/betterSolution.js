// 제한사항 : 1 ≤ my_string의 길이 ≤ 100 , letter은 길이가 1인 영문자입니다. , my_string과 letter은 알파벳 대소문자로 이루어져 있습니다. , 대문자와 소문자를 구분합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution1(my_string, letter) {
  isValid(my_string, letter); // 유효성 검사
  return my_string.split(letter).join("");
}

function solution2(my_string, letter) {
  isValid(my_string, letter); // 유효성 검사
  return my_string.replaceAll(letter, "");
}

function solution3(my_string, letter) {
  isValid(my_string, letter); // 유효성 검사
  return Array.from(my_string)
    .filter((t) => t !== letter)
    .join("");
}

function isValid(my_string, letter) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  if (my_string.length < 1 || my_string.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (my_string.split("").filter((e) => !regex.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (!regex.test(letter) || letter.length !== 1) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
