function solution1(n) {
  isValid(n); // 유효성 검사
  const answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i); // for 활용법
  return answer;
}

function solution2(n) {
  isValid(n); // 유효성 검사
  return Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0); // Array.from 활용
  // Array.from 은 object 형태로 array 를 첫 번째 인자로 받은 뒤에, callback에 해당하는 값을 각각 포험 한다.
  // callback의 첫 번째 인자는 이미 존재하는 array의 element 값이며, 두번째 인자는 index 값이다.
}

function solution3(n) {
  isValid(n); // 유효성 검사
  return Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 !== 0); // map 활용
}

function isValid(n) {
  // 유효성 검사
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
