// 제한사항 : numbers는 소문자로만 구성되어 있습니다.
//          numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
//          1 ≤ numbers의 길이 ≤ 50, "zero"는 numbers의 맨 앞에 올 수 없습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  validator(numbers);
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return Number(num.reduce((acc, cur, idx) => acc.replaceAll(cur, idx), numbers));
}

function validator(numbers) {
  if (/[^a-z]/.test(numbers)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (numbers.length < 1 || numbers.length > 50) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
