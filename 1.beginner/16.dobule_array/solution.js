// 제한사항 : -10,000 ≤ numbers의 원소 ≤ 10,000 , 1 ≤ numbers의 길이 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120809

function solution(numbers) {
  isValid(numbers); // 유효성 검사
  return numbers.map((e) => e * 2);
}

function isValid(numbers) {
  // 유효성 검사
  if (numbers.length < 1 || numbers.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (numbers.filter((e) => !Number.isInteger(e) || typeof e !== "number" || e < -10000 || e > 10000).length !== 0)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
