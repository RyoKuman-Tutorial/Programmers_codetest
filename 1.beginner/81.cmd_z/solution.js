// 제한사항 : 1 ≤ s의 길이 ≤ 200 , -1,000 < s의 원소 중 숫자 < 1,000 , s는 숫자, "Z", 공백으로 이루어져 있습니다 , s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
//          연속된 공백은 주어지지 않습니다 , 0을 제외하고는 0으로 시작하는 숫자는 없습니다 , s는 "Z"로 시작하지 않습니다 , s의 시작과 끝에는 공백이 없습니다 , "Z"가 연속해서 나오는 경우는 없습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  validator(s);
  const result = [];
  const arr = s.split(" ").forEach((e) => (e !== "Z" ? result.unshift(e) : result.shift()));
  return result.reduce((acc, cur) => acc + Number(cur), 0);
}

function validator(s) {
  if (s.length < 1 || s.length > 200) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (s.split(" ").filter((e) => (e !== "Z" ? e <= -1000 || e >= 1000 : false)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (/[^-0-9Z\s]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (s.split(" ")[0] === "Z") throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 7
}
