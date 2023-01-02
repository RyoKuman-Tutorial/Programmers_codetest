// 제한사항 : 0 < M, N < 100 , 종이를 겹쳐서 자를 수 없습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120922

function solution(M, N) {
  validator(M, N);
  return M - 1 + M * (N - 1);
}

function validator(...values) {
  if (values.filter((e) => e <= 0 || e >= 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
