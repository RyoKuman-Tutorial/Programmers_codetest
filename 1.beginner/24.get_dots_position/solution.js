// 제한사항 : dot의 길이 = 2 , dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다 , -500 ≤ dot의 원소 ≤ 500 , dot의 원소는 0이 아닙니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  isValid(dot); // 유효성 검사
  const x = dot[0];
  const y = dot[1];

  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

function isValid(dot) {
  // 유효성 검사
  if (dot.length !== 2) throw new TypeError();
  if (dot.filter((e) => e > 500 || e < -500 || e === 0).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
