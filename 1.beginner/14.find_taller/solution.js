// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 1 ≤ height ≤ 200 , 1 ≤ array의 원소 ≤ 200
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
  isValid(array, height); // 유효성 검사
  return array.filter((e) => height < e).length;
}

function isValid(array, height) {
  // 유효성 검사
  if (typeof height !== "number" || !Number.isInteger(height) || height < 1 || height > 200) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError

  array.forEach((value) => {
    if (typeof value !== "number" || !Number.isInteger(value) || value < 0 || value > 200) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
