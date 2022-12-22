// 제한사항 : 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  isValid(n); // 유효성 검사
  const arr = [];
  for (let i = 0; i <= n; i++) if (i % 2 == 1) arr.push(i);
  return arr.sort((a, b) => a - b);
}

function isValid(n) {
  // 유효성 검사
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
