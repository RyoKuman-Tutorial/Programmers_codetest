// 제한 사항 : 3 ≤ k ≤ 9 , 3 ≤ m ≤ 10 , 7 ≤ score의 길이 ≤ 1,000,000 , 1 ≤ score[i] ≤ k , 이익이 발생하지 않는 경우에는 0을 return 해주세요.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution1(k, m, score) {
  validator(k, m, score);
  return (
    score
      .sort() // score 정렬
      .filter((_, i) => !((s.length - i) % m)) // 세번째 수, 그러니까 최솟값만 가져온다.
      .reduce((a, v) => a + v, 0) * m // 최솟값들을 모두 더한 뒤 m 으로 곱해버린다.
  );
}

function validator(k, m, score) {
  if (k < 3 || k > 9) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (m < 3 || m > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (score.length < 7 || score.length > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (score.filter((v) => v < 1 || v > k).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
