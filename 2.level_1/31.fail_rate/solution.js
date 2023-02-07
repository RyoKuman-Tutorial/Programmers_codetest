function solution(N, stages) {
  const peopleNum = new Array(N + 1).fill(0);
  const failRate = [];

  stages.forEach((e) => {
    for (let i = 0; i < e; i++) peopleNum[i]++;
  });

  peopleNum.forEach((e, i) => {
    const failPeople = e - peopleNum[i + 1];
    if (!Number.isNaN(failPeople)) failRate.push([failPeople / e, i + 1]);
  });

  return failRate.sort((b, a) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])).map((e) => e[1]);
}

// 30m
