// 제한 사항 : 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다 , X, Y는 0으로 시작하지 않습니다 , X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  validator(X, Y);
  let answer = "";
  X = X.split("");
  Y = Y.split("");
  // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  // 내림차순으로 정렬해 반환하면 최댓값
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}

function validator(X, Y) {
  if (X.length < 3 || X.length > 3000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-1
  if (Y.length < 3 || Y.length > 3000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1-2
  if (String(X).slice(0, 1) === "0") throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2-1
  if (String(Y).slice(0, 1) === "0") throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2-2
}
