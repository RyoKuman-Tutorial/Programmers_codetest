// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  return Array.from({ length: 10 }, (_, i) => i).reduce((acc, cur) => (numbers.includes(cur) ? acc : acc + cur), 0);
}
