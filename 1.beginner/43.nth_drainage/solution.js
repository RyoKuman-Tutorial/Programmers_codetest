// 제한사항 : 1 ≤ n ≤ 10,000 , 1 ≤ numlist의 크기 ≤ 100 , 1 ≤ numlist의 원소 ≤ 100,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
  isValid(n, numlist);
  return numlist.filter((e) => e % n === 0);
}

function isValid(n, numlist) {
  // 유효성 검사
  if (n < 1 || n > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (numlist.length < 1 || numlist.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (numlist.filter((e) => e < 1 || e > 100000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
