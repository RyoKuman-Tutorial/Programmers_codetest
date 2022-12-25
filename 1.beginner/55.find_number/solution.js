// 제한사항 : 0 < num < 1,000,000 , 0 ≤ k < 10 , num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  validator(num, k);
  const result = num
    .toString()
    .split("")
    .map((e) => Number(e))
    .reduce((acc, cur, idx) => (cur === k ? [...acc, idx + 1] : acc), []);

  return result.length !== 0 ? Math.min(...result) : -1;
}

function validator(num, k) {
  // 유효성 검사
  if (num <= 0 || num >= 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (k < 0 || k >= 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
