function solution1(rsp) {
  isValid(rsp);
  const arr = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((v) => arr[v]).join(""); // 객체 활용
}

function isValid(rsp) {
  // 유효성 검사
  if (rsp.length <= 0 || rsp.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!/^[205]+$/.test(rsp)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
