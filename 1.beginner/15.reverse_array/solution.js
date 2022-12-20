// 제한사항 : 1 ≤ num_list의 길이 ≤ 1,000 , 0 ≤ num_list의 원소 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120821

function solution(num_list) {
  isValid(num_list); // 유효성 검사
  return num_list.reverse();
}

// 제한사항 : 1 ≤ num_list의 길이 ≤ 1,000 , 0 ≤ num_list의 원소 ≤ 1,000

function isValid(num_list) {
  // 유효성 검사
  if (num_list.length < 1 || num_list.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (num_list.filter((e) => !Number.isInteger(e) || typeof e !== "number" || e < 0 || e > 1000).length !== 0)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
