// 제한사항 : box의 길이는 3입니다 , 1 ≤ box의 원소 ≤ 100 , 1 ≤ n ≤ 50 , n ≤ box의 원소
//          주사위는 상자와 평행하게 넣습니다 , box[0] = 상자의 가로 길이 , box[1] = 상자의 세로 길이 , box[2] = 상자의 높이 길이
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120845

function solution(box, n) {
  isValid(box, n);
  return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}

function isValid(box, n) {
  // 유효성 검사
  if (box.length !== 3) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (box.filter((e) => e < 1 || e > 100).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (n < 1 || n > 50) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (box.filter((e) => e < n).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
