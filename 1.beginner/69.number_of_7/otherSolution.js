function solution(array) {
  validator(array);
  return array.join("").split(7).length - 1; // split 활용 ,문자열 사이의 문자를 검색할 때, 항상 split 을 염두하자
}

function validator(array) {
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 0 || e > 100000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
