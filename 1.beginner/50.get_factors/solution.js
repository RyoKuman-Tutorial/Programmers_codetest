// 제한사항 : 1 ≤ n ≤ 10,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
  validator(n);
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => {
    if (n % cur === 0) acc.push(cur);
    return acc;
  }, []);
}

function validator(n) {
  // 유효성 검사
  if (n < 1 || n > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
