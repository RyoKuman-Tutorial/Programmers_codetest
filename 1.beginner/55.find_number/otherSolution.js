function solution1(num, k) {
  validator(num, k);
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1 // indexof , map을 보다 잘 활용
  );
}

function validator(num, k) {
  // 유효성 검사
  if (num <= 0 || num >= 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (k < 0 || k >= 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
