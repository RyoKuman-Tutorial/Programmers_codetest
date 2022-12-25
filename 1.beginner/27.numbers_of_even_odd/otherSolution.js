function solution1(num_list) {
  isValid(num_list); // 유효성 검사
  const answer = [0, 0];
  for (let a of num_list) answer[a % 2] += 1; // 1이 나오면 ( 홀수 ) answer[1] 에 ++ , 0이 나오면 ( 짝수 ) answer[0] 에 ++
  return answer;
}

function solution2(num_list) {
  isValid(num_list); // 유효성 검사
  return num_list.reduce(
    ([even, odd], curr) => [curr % 2 === 0 ? even + 1 : even, curr % 2 === 1 ? odd + 1 : odd],
    [0, 0]
  ); // reduce 활용
}

function solution3(num_list) {
  const evenN = num_list.filter((el) => el % 2 == 0).length;
  return [evenN, num_list.length - evenN]; // filter 다른 활용법
}

function isValid(num_list) {
  // 유효성 검사
  if (num_list.length < 1 || num_list.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (num_list.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
