// 제한사항 : 중복된 원소는 없습니다. , 1 ≤ emergency의 길이 ≤ 10 , 1 ≤ emergency의 원소 ≤ 100
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120835

function solution(emergency) {
  validator(emergency);
  return emergency.map((e) => [...emergency].sort((a, b) => b - a).indexOf(e) + 1);
}

function validator(emergency) {
  if (emergency.length < 1 || emergency.length > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (emergency.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
