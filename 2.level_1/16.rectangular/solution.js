// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  sizes = sizes.map((v) => v.sort((a, b) => b - a));
  const result = sizes.reduce(
    (acc, cur) => {
      if (acc[0] < cur[0]) acc[0] = cur[0];
      if (acc[1] < cur[1]) acc[1] = cur[1];
      return acc;
    },
    [0, 0]
  );

  return result.reduce((a, b) => a * b, 1);
}
