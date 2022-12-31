// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(polynomial) {
  const arr = polynomial.split(" + ");

  const xNum = arr
    .filter((n) => n.includes("x")) // x 포함하는 모든 항
    .map((n) => n.replace("x", "") || "1") // x 제거, 만약 해당 항의 계수가 1 이면 "" 이 남으므로, || 활용하여 1
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0); // 모든 값 합쳐줌

  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + parseInt(cur, 10), 0); // 숫자만 받아서 reduce

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
