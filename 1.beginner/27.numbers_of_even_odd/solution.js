// 제한사항 : 1 ≤ num_list의 길이 ≤ 100 , 0 ≤ num_list의 원소 ≤ 1,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  isValid(num_list); // 유효성 검사
  return [num_list.filter((e) => e % 2 === 0).length, num_list.filter((e) => e % 2 === 1).length];
}

function isValid(num_list) {
  // 유효성 검사
  if (num_list.length < 1 || num_list.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (num_list.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
