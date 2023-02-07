// 제한 사항 : 3 ≤ k ≤ 100 , 7 ≤ score의 길이 ≤ 1,000 , 0 ≤ score[i] ≤ 2,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  validator(k, score);
  let hall = [];
  const result = [];

  score.forEach((e) => {
    const res = [...hall, e].sort((a, b) => b - a);
    res.length = k;
    hall = res;

    result.push(hall.reduce((acc, cur) => (acc > (Number.isNaN(cur) ? 2001 : cur) ? cur : acc), hall[0]));
  });

  return result;
}

function validator(k, score) {
  if (k < 3 || k > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (score.length < 7 || score.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (score.filter((e) => e < 0 || e > 2000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
