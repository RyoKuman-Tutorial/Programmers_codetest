// 제한사항 : 1 ≤ my_string ≤ 110 , my_string은 대문자, 소문자, 공백으로 구성되어 있습니다 ,
//          대문자와 소문자를 구분합니다 , 공백(" ")도 하나의 문자로 구분합니다 , 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  validator(my_string);
  return [...my_string]
    .reduce((acc, cur) => {
      if (acc.includes(cur)) return acc;
      return [...acc, cur];
    }, [])
    .join("");
}

function validator(my_string) {
  // 유효성 검사
  if (my_string < 1 || my_string > 110) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-zA-Z\s]/.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
