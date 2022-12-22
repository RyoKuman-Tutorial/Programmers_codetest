function solution1(dot) {
  isValid(dot); // 유효성 검사

  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

function isValid(dot) {
  // 유효성 검사
  if (dot.length !== 2) throw new TypeError();
  if (dot.filter((e) => e > 500 || e < -500 || e === 0).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
