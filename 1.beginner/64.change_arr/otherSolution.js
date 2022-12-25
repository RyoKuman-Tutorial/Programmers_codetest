function solution1(num_list, n) {
  validator(num_list, n);
  return Array.from({ length: num_list.length / n }, () => num_list.splice(0, n)); // splice 와 from 의 활용
}

function validator(num_list, n) {
  if (num_list.length % n !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (num_list.length < 0 || num_list > 150) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (n < 2 || n >= num_list.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
