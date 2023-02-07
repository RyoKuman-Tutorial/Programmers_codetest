function solution(n, lost, reserve) {
  const clothes = Array.from({ length: n }, (_, i) => {
    let num = 1;
    if (reserve.includes(i + 1)) num++;
    if (lost.includes(i + 1)) num--;
    return num;
  });

  clothes.forEach((v, i) => {
    if (v === 2) {
      if (clothes[i - 1] === 0) {
        clothes[i - 1] = 1;
        clothes[i] = 1;
        return;
      }
      if (clothes[i + 1] === 0) {
        clothes[i + 1] = 1;
        clothes[i] = 1;
        return;
      }
    }
  });

  return clothes.filter((e) => e === 1 || e === 2).length;
}
