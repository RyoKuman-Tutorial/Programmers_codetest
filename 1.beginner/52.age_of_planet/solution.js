// 제한사항 : age는 자연수입니다 , age ≤ 1,000 , PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  validator(age);
  const changer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return age
    .toString()
    .split("")
    .map((e) => changer[Number(e)])
    .join("");
}

function validator(age) {
  // 유효성 검사
  if (!Number.isInteger(age) || age <= 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (age > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
