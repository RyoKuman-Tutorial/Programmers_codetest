function solution1(n) {
  isValid(n); // 유효성 검사
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx) // map 의 첫번째 인자는 value, 두 번쨰 인자는 index이다.
    .filter((v) => n % v === 0).length; // array 활용,
}

function isValid(n) {
  // 유효성 검사
  if (n < 1 || n > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
