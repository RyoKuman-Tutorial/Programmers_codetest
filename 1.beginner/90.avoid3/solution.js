// 제한사항 : 1 ≤ n ≤ 100
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  validator(n);
  let numOf3 = 0;

  const result = Array.from({ length: n + 1 }, (_, i) => {
    while ((i + numOf3 || 1) % 3 === 0 || String(i + numOf3).includes("3")) numOf3++;
    return i + numOf3;
  });

  return result[n];
}

function validator(n) {
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
}
