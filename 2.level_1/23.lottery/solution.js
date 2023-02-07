// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let same = 0;
  const numOfZero = lottos.filter((e) => e === 0).length;
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };

  win_nums.forEach((e) => {
    if (lottos.includes(e)) same += 1;
  });

  return [rank[same + numOfZero] || 6, rank[same] || 6];
}
