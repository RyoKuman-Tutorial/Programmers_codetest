function solution1(i, j, k) {
  validator(i, j, k);
  return (
    Array.from({ length: j - i + 1 }, (_, idx) => i + idx)
      .join("")
      .split(k).length - 1 // split 활용
  );
}

function validator(i, j, k) {
  if (i < 1 || i >= j) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-1
  if (i >= j || j > 100000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-2
  if (k < 0 || k > 9) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
