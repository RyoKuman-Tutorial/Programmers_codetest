// 제한사항 : return 값은 이진수를 의미하는 문자열입니다 , 1 ≤ bin1, bin2의 길이 ≤ 10 , bin1과 bin2는 0과 1로만 이루어져 있습니다 , bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
  validator(bin1, bin2);
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

function validator(...values) {
  if (values.filter((e) => e.length < 1 || e.length > 10).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (values.filter((e) => /[^01]/.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (values.filter((e) => (e === "0" ? false : [...e][0] === "0")).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
