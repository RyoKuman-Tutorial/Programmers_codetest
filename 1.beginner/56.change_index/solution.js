// 제한사항 : 1 < my_string의 길이 < 100 , 0 ≤ num1, num2 < my_string의 길이 , my_string은 소문자로 이루어져 있습니다 , num1 ≠ num2
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  validator(my_string, num1, num2);
  return my_string
    .split("")
    .map((e, i, arr) => {
      if (i === num1) return arr[num2];
      if (i === num2) return arr[num1];
      return e;
    })
    .join("");
}

function validator(my_string, num1, num2) {
  // 유효성 검사
  if (my_string <= 1 || my_string >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (num1.length < 0 || num2.length < 0 || num1.length >= my_string.length || num2.length >= my_string.length)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  // if (!/[a-z]/g.test(my_string)) throw new TypeError();
  // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3 하지만 위 제한사항은 지켜지지 않으므로 패스
  if (num1 === num2) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
