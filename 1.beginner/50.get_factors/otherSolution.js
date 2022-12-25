function solution1(n) {
  validator(n);
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0); // filter 를 쓰자
}

function solution2(n) {
  validator(n);
  return Array.from({ length: n }, (_, i) => i + 1).filter((el) => n % el === 0); // filter 를 쓰자
}

function validator(n) {
  // 유효성 검사
  if (n < 1 || n > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
