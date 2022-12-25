function solution1(order) {
  validator(order);
  return ("" + order).split(/[369]/).length - 1; // split 을 통해 구분
}

function validator(order) {
  // 유효성 검사
  if (order < 1 || order > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항
}
