// 제한사항 : 1 ≤ my_string의 길이 ≤ 100 , my_string에는 숫자가 한 개 이상 포함되어 있습니다 , my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution1(my_string) {
  isValid(my_string);
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n)); // match 활용
}

function isValid(my_string) {
  // 유효성 검사
  if (my_string.length < 1 || my_string.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!/[0-9]/.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (!/^[a-z0-9]+$/.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
