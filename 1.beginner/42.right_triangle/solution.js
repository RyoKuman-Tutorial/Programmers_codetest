// 제한사항 : 1 ≤ n ≤ 10
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120910

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;

rl.on("line", function (line) {
  n = line.split(" ").filter((e) => Number.isInteger(Number(e)));
  isValid(n); // 유효성 검사
}).on("close", function () {
  for (let i = 1; i <= n; i++) console.log("*".repeat(i));
});

function isValid(n) {
  // 유효성 검사
  if (n < 1 || n > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
