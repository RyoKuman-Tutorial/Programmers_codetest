// 제한사항 : 3 ≤ numbers의 길이 ≤ 20 , direction은 "left" 와 "right" 둘 중 하나입니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
  validator(numbers, direction);
  if (direction === "left") numbers.push(numbers.shift());
  else numbers.unshift(numbers.pop());
  return numbers;
}

function validator(numbers, direction) {
  // 유효성 검사
  if (numbers < 3 || numbers > 20) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!/["left"|"right"]/.test(direction)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
