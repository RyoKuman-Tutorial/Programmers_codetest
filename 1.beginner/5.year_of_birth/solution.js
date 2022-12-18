// 제한사항 : 0 < age ≤ 120 , 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120820

function solution(age) {
  isValid(age);
  return 2022 - age + 1; // 유효성 검사
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (typeof value === "number" || value < 0 || value > 120) {
      return new TypeError();
    }
  });
}
