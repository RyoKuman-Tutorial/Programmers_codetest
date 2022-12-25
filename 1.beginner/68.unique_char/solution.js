// 제한사항 : 0 < s의 길이 < 1,000 ,s는 소문자로만 이루어져 있습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  validator(s);
  return [...s]
    .reduce((acc, cur, _, arr) => (arr.filter((e) => e === cur).length === 1 ? [...acc, cur] : acc), [])
    .sort()
    .join("");
}

function validator(s) {
  if (s.length <= 0 || s.length >= 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-z]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
