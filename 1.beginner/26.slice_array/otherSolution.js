function solution1(numbers, num1, num2) {
  isValid(numbers, num1, num2); // 유효성 검사
  return numbers.splice(num1, num2 - num1 + 1); // splice 활용
}

function solution2(numbers, num1, num2) {
  isValid(numbers, num1, num2); // 유효성 검사
  return numbers.filter((n, i) => num1 <= i && i <= num2); // filter 활용
}

function isValid(numbers, num1, num2) {
  // 유효성 검사
  if (numbers.length < 2 || numbers.length > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (numbers.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (num1 < 0 || num1 >= num2 || num2 >= numbers.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
