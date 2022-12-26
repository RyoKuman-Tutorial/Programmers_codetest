// 제한사항 : 2 < numbers의 길이 < 100 , 0 < k < 1,000 , numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다 , numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  validator(numbers, k);
  return numbers[(2 * (k - 1)) % numbers.length]; // 이게 최적의 방법이다.
}

function validator(numbers, k) {
  if (numbers.length <= 2 || numbers.length >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (k <= 0 || k >= 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
