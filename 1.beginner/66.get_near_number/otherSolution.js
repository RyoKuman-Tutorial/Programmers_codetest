function solution1(array, n) {
  validator(array, n);
  return array.map((e) => [e, Math.abs(e - n)]).sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0]; // 재미있는 접근법
}

function solution2(array, n) {
  return array.reduce(
    (a, b) => (Math.abs(a - n) < Math.abs(b - n) ? a : Math.abs(a - n) === Math.abs(b - n) ? Math.min(a, b) : b) // reduce 활용
  );
}
function validator(array, n) {
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
