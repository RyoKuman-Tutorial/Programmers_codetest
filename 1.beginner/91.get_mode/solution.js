// 제한사항 : 0 < array의 길이 < 100 , 0 ≤ array의 원소 < 1000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  validator(array);
  const result = new Array(Math.max(...array) + 1).fill(0);
  array.forEach((e) => result[e]++);
  return result.filter((e) => e >= Math.max(...result)).length === 1 ? result.indexOf(Math.max(...result)) : -1;
}

function validator(array) {
  if (array.length <= 0 || array.length >= 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (array.some((e) => e < 0 || e >= 1000)) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
}
