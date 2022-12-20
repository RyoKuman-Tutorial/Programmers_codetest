// 제한사항 : 0 < n < 1,000 , n / 10 ≤ k < 1,000 , 서비스로 받은 음료수는 모두 마십니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  isValid(n, k); // 유효성 검사
  const lambSkewers = n * 12000;
  const berverage = (k - Math.floor(n / 10)) * 2000;
  const result = lambSkewers + berverage;
  return result;
}

function isValid(n, k) {
  // 유효성 검사
  [n, k].forEach((value) => {
    if (typeof value !== "number" || value <= 0 || value >= 1000) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });

  if (k < Math.floor(n / 10)) {
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  }
}
