// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  numbers.forEach((v, i) => (s = s.replaceAll(v, i)));
  return Number(s);
}
