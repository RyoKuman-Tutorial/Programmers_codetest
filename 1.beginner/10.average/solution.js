// 제한사항 : 0 ≤ numbers의 원소 ≤ 1,000 , 1 ≤ numbers의 길이 ≤ 100 , 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  isValid(numbers); // 유효성 검사
  const total = numbers.reduce((total, num) => total + num, 0);
  return total / numbers.length;
}

function isValid(values) {
  // 유효성 검사

  if (values.length < 0 || values.length > 100) {
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  }

  values.forEach((value) => {
    if (typeof value !== "number" || value < 0 || value > 1000) {
      throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
