// 제한사항 : 2 ≤ slice ≤ 10 , 1 ≤ n ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution1(slice, n) {
  isValid(slice, n); // 유효성 검사
  return Math.ceil(n / slice); // 올림을 이용함
  // n/slice 가 만약, 정수로 나누어떨어지는 경우는 피자가 충분하다는 뜻이고,
  // n/slice 가 소숫점을 갖는다면, 나머지가 존재한다는 뜻, 결국 피자가 충분하지 않다.
  // 때문에 올림을 이용함
}

function solution2(slice, n) {
  isValid(slice, n); // 유효성 검사
  return n % slice ? Math.floor(n / slice) + 1 : n / slice;
  // solution 보다 좀더 깔끔함, 하지만 결국 올림과 똑같다.
}

function isValid(slice, n) {
  // 유효성 검사
  if (!Number.isInteger(slice) || slice < 2 || slice > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (!Number.isInteger(n) || n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
