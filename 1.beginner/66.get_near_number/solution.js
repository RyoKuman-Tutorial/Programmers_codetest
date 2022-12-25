// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 1 ≤ array의 원소 ≤ 100 , 1 ≤ n ≤ 100 , 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  validator(array, n);
  return array.sort((a, b) => {
    const result = Math.sqrt((a - n) ** 2) - Math.sqrt((b - n) ** 2);
    if (result === 0) return a - b;
    else return result;
  })[0];
}

function validator(array, n) {
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
