// 제한사항 : 1 ≤ my_string의 길이 ≤ 1,000 , my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  isValid(my_string);
  return my_string
    .split("")
    .map((e) => {
      if (/[a-z]/.test(e)) return e.toUpperCase();
      return e.toLowerCase();
    })
    .join("");
}

function isValid(my_string) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  if (my_string < 1 || my_string > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
