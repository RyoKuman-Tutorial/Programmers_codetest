// 제한 사항 : 1 ≤ s의 길이 ≤ 10,000 , s은 영어 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  validator(s);
  const words = [...s].reduce((acc, cur) => acc.includes(cur), []);
  return words;
}

function validator(s) {
  if (s.length < 1 || p.length > 18) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (t.length < p.length || t.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (/[^0-9]/.test(t) || /[^0-9]/.test(p)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
