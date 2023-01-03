// 제한 사항 : 1 ≤ p의 길이 ≤ 18 , p의 길이 ≤ t의 길이 ≤ 10,000 , t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  validator(t, p);
  const lines = [];
  for (let i = 0; i < t.length; i++) lines.push(t.slice(i, i + p.length));
  return lines.filter((e) => e.length === p.length).filter((e) => +e <= +p).length;
}

function validator(t, p) {
  if (p.length < 1 || p.length > 18) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (t.length < p.length || t.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (/[^0-9]/.test(t) || /[^0-9]/.test(p)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
