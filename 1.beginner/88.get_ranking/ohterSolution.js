// 제한사항 : 0 ≤ score[0], score[1] ≤ 100 , 1 ≤ score의 길이 ≤ 10 , score의 원소 길이는 2입니다 , score는 중복된 원소를 갖지 않습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  validator(score);
  return score.map((e) => score.filter((v) => (v[0] + v[1]) / 2 > (e[0] + e[1]) / 2).length + 1); // 등수 = 나보다 점수가 높은 사람의 머릿수,
  // 빅오는 score.length * 2  즉 O(n)
}

function validator(score) {
  if (score.flat().filter((e) => e < 0 || e > 100).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (score.length < 1 || score.length > 10) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
  if (score.filter((e) => e.length !== 2).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 3
  if ([...new Set(score)].length !== score.length) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 4
}
