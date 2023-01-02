// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const arr = quiz.map((e) => e.split("="));
  const result = arr.map((e) => (calculator(e[0]) === Number(e[1]) ? "O" : "X"));
  return result;
}

function calculator(str) {
  const opts = str.split(" ").filter((e) => isNaN(e));
  const numbers = str
    .split(" ")
    .filter((e) => !isNaN(e))
    .map((e) => Number(e));

  const result = opts.reduce((acc, cur) => {
    if (cur === "+") return acc + numbers.shift();
    if (cur === "-") return acc - numbers.shift();
  }, numbers.shift());

  return result;
}
