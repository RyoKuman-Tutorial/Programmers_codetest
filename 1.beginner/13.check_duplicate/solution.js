// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 0 ≤ array의 원소 ≤ 1,000 , 0 ≤ n ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  isValid(array, n); // 유효성 검사
  let result = 0;
  array.forEach((value) => {
    if (value === n) result++;
  });

  return result;
}

function isValid(array, n) {
  // 유효성 검사
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0 || n > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError

  array.forEach((value) => {
    if (typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > 1000) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
