function solution(num, total) {
  validator(num, total);
  const min = total / num - num / 2 + 1 / 2; // 등차수열의 합 구하는 방법 활용
  return Array.from({ length: num }, (_, i) => min + i);
}

function validator(num, total) {
  if (num < 1 || num > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (total < 0 || total > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
