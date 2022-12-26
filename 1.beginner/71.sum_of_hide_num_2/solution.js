// 제한사항 : 1 ≤ my_string의 길이 ≤ 1,000 , my_string은 소문자, 대문자, 자연수로만 구성되어있습니다 , 1 ≤ my_string 안의 자연수 ≤ 1000
//          연속된 수는 하나의 숫자로 간주합니다, 000123과 같이 0이 선행하는 경우는 없습니다, 문자열에 자연수가 없는 경우 0을 return 해주세요.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  validator(my_string);
  return my_string.split(/[a-zA-Z]/).reduce((acc, cur) => Number(cur) + acc, 0);
}

function validator(my_string) {
  if (my_string.length < 1 || my_string > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-zA-Z0-9]/.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (my_string.split(/[a-zA-Z]/).filter((e) => (Number(e) > 1000 || Number(e) < 1) && e !== "").length !== 0)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (my_string.split(/[a-zA-Z]/).filter((e) => e[0] === "0").length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 5
}
