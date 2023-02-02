// 제한 사항 : 1 ≤ number ≤ 100,000 , 2 ≤ limit ≤ 100 , 1 ≤ power ≤ limit
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  validator(number, limit, power);
  const a = Array.from({ length: number }, (_, i) => getFactors(i + 1));
  return a.reduce((acc, cur) => (cur <= limit ? acc + cur : acc + power), 0);
}

function getFactors(number) {
  const factors = Array.from({ length: Math.floor(Math.sqrt(number)) }, (_, i) => i + 1).reduce(
    (acc, cur) => (number % cur === 0 ? [...acc, cur, number / cur] : acc),
    []
  );

  return [...new Set(factors)].length;
}

function validator(number, limit, power) {
  if (number < 1 || number > 100000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (limit < 2 || limit > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (power < 1 || power > limit) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
