// 제한사항 : 0 < angle ≤ 180 , angle은 정수입니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120829

function solution(angle) {
  isValid(angle); // 유효성 검사

  const rightAngle = 90; // 직각 설정
  const flatAngle = 180; // 평각 설정

  if (angle < rightAngle) return 1;
  if (angle == rightAngle) return 2;
  if (angle < flatAngle) return 3;
  if (angle == flatAngle) return 4;
}

function isValid(...values) {
  // 유효성 검사
  values.forEach((value) => {
    if (typeof value !== "number" || value < -50000 || value > 50000 || !Number.isInteger(value)) {
      return new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
    }
  });
}
