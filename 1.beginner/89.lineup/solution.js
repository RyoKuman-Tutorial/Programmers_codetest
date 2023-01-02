// 제한사항 : 1 ≤ n ≤ 10,000 , 1 ≤ numlist의 원소 ≤ 10,000 , 1 ≤ numlist의 길이 ≤ 100 , numlist는 중복된 원소를 갖지 않습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist, n) {
  validator(numlist, n);
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

function validator(numlist, n) {
  if (n < 1 || n > 10000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (numlist.filter((e) => e < 1 || e > 10000).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
  if (numlist.length < 1 || numlist.length > 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 3
  if ([...new Set(numlist)].length !== numlist.length) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 4
}
