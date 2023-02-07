// 제한 사항 : 1 ≤ s의 길이 ≤ 10,000 , s은 영어 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  validator(s);
  const tempArr = Array.from({ length: s.length }, (_, i) => ({ value: s[i], idx: i }));
  const result = tempArr.map((v) => {
    const result = [...s.slice(0, v.idx)].reduce((acc, cur, idx) => (cur === v.value ? idx : acc), -1); // 문자열을 0 부터 해당 값의 위치까지 잘라낸다.
    if (result !== -1) return v.idx - result;
    return -1;
  });

  return result;
}

function validator(s) {
  if (s.length < 1 || s.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-z]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
