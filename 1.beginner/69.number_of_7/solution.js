// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 0 ≤ array의 원소 ≤ 100,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  validator(array);
  return array.reduce((acc, cur) => [...cur.toString()].filter((e) => Number(e) === 7).length + acc, 0);
}

function validator(array) {
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 0 || e > 100000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
