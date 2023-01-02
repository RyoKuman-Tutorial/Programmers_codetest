// 제한사항 : 0 < denum1, num1, denum2, num2 < 1,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
  validator(denum1, denum2, num1, num2);
  const denum = denum1 * num2 + denum2 * num1;
  const num = num1 * num2;
  const gcd = getGcd(...[denum, num].sort((a, b) => b - a));

  return [denum / gcd, num / gcd];
}

function getGcd(n1, n2) {
  return n1 % n2 === 0 ? n2 : getGcd(n2, n1 % n2);
}

function validator(...values) {
  if (values.some((e) => e <= 0 || e >= 1000)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
