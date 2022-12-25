function solution1(str1, str2) {
  isValid(str1, str2); // 유효성 검사
  return str1.split(str2).length > 1 ? 1 : 2; // split 활용
}

function solution2(str1, str2) {
  isValid(str1, str2); // 유효성 검사
  return str1.search(str2) !== -1 ? 1 : 2; // search 활용
}

function isValid(...values) {
  // 유효성 검사
  if (values.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
