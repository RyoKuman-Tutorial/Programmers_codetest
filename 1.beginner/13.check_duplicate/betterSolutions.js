// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 0 ≤ array의 원소 ≤ 1,000 , 0 ≤ n ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  isValid(array, n); // 유효성 검사
  return array.filter((v) => v === n).length;
  // Array.prototype.filter 의 return 값이 array 인걸 활용한 방법
  // forEach 는 length 와 index 둘다 활용할 일이 있거나 값에 직접적으로 접근하는것이 아닌 이상 사용을 지양하자
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
