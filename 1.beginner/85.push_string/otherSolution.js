function solution1(A, B) {
  validator(A, B);
  return (B + B).indexOf(A); // 최고의 방법
}

function solution2(A, B) {
  if (A === B) return 0;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1; // slice 활용
}

function validator(A, B) {
  if (A.length !== B.length || A.length <= 0 || A.length >= 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (/[^a-z]/.test(A) || /[^a-z]/.test(B)) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
}
