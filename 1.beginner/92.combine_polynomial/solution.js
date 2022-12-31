// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  const obj = { x: 0, number: 0 };

  const arr = polynomial
    .split(" ")
    .map((e) => (e === "x" ? "1x" : e))
    .filter((e) => /[0-9x]/.test(e)); // 수식의 항들만을 남겨서, 배열로 저장

  arr.forEach((v) => {
    if (v.includes("x")) obj.x += Number(v.split("x")[0]); // 항이 x 를 포함하면 x 의 계만큼 obj.x 에 더함
    else obj.number += Number(v); // 항이 자연수인경우, 해당 항만큼 obj.number 에 더함
  });

  const result = [];
  if (obj.x !== 0) result.push(`${obj.x === 1 ? "" : obj.x}x`); // obj.x 가 1 인 경우 x 만 출력되어야 한다.
  if (obj.number !== 0) result.push(`${obj.number}`);
  return result.join(" + ");
}
