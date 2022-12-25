function solution(array) {
  validator(array);
  const max = Math.max([...array]);
  return [max, array.indexof(max)]; // ..., Math 활용
  // 2 * O(N) 이므로 상대적으로 soution 에 비해 효율적인 동작이라고 보기 어렵다.
}

function validator(array) {
  // 유효성 검사
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if ([...new Set(array)].length !== array.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
