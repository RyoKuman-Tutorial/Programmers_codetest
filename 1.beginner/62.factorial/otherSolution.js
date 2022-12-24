function solution(n) {
  validator(n);
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i; // 팩토리얼을 간단히 표현
  return i;
}

function validator(n) {
  // 유효성 검사
  if (n <= 0 || n > 3628800) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
