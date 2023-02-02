// 제한 사항 : 1 ≤ s의 길이 ≤ 10,000 , s은 영어 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  validator(s);

  let str = "";
  const result = [...s].reduce(
    (acc, cur, idx) => {
      if (acc.x === null) acc.x = cur;
      if (cur === acc.x) acc.xNum++;
      else acc.num++;
      str += cur;

      if (acc.xNum === acc.num) {
        const res = { x: null, xNum: 0, num: 0, result: [...acc.result, str] };
        str = "";
        return res;
      }
      if (idx === s.length - 1) return { x: null, xNum: 0, num: 0, result: [...acc.result, str] };
      return acc;
    },
    { x: null, xNum: 0, num: 0, result: [] }
  );

  return result.result.length;
}

function validator(s) {
  if (s.length < 1 || s.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-z]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
