function solution1(sides) {
  isValid(sides); // 유효성 검사
  const max = Math.max(...sides); // Number.max 를 활용한 예제
  const sum = sides.reduce((a, b) => a + b, 0) - max;

  return max < sum ? 1 : 2;
}

function solution(sides) {
  isValid(sides); // 유효성 검사
  sides.sort((a, b) => a - b); // sort 를 활용한 다른 예제, 사실 ( a, b ) => a - b 는 없어도 된다.
  // 원리는 a b 보다 작은 경우, 0보다 작은 값이 return 되므로, false 가 return 된다.
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

function isValid(sides) {
  // 유효성 검사
  if (sides.length !== 3) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (sides.filter((e) => !Number.isInteger(e) || e > 1000 || e < 1).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
