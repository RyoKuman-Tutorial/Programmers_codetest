function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  answers.forEach((e, i) => {
    if (e === p1[i % p1.length]) result[0][1]++;
    if (e === p2[i % p2.length]) result[1][1]++;
    if (e === p3[i % p3.length]) result[2][1]++;
  });

  result.sort((a, b) => b[1] - a[1]);
  return result.filter((e) => e[1] === [...result].shift()[1]).map((e) => e[0]);
}
