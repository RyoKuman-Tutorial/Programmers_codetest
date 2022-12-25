// 제한사항 : 0 < before의 길이 == after의 길이 <= 1,000 , before와 after는 모두 소문자로 이루어져 있습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  validator(before, after);
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

function validator(before, after) {
  // 유효성 검사
  const regex = /[^a-z]/;
  if (before.length <= 0 || before.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-1
  if (after.length <= 0 || after.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-2
  if (after.length !== before.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-3
  if (regex.test(after) || regex.test(before)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
