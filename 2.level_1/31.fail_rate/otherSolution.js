function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length; // stage 에 도전한 사람 머릿수
    let curr = stages.filter((x) => x === i).length; // i 에 머무른, 클리어 실패한 사람 머릿수
    result.push([i, curr / reach]);
  }

  result.sort((a, b) => (a[0] === b[0] ? a[0] - b[0] : b[1] - a[1]));
  return result.map((x) => x[0]);
}
