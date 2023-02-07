// 제한 사항 : 2 ≤ food의 길이 ≤ 9 , 1 ≤ food의 각 원소 ≤ 1,000 , food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
//           food[i]는 i번 음식의 수입니다, food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다, 정답의 길이가 3 이상인 경우만 입력으로 주어집니다
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  validator(food);
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2)); // i 를 추가하는걸 repaet 한다.
  }

  return res + "0" + [...res].reverse().join(""); // 뒤집어서 더하기
}

function validator(food) {
  if (food.length < 2 || food.length > 9) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (food.filter((v) => v < 1 || v > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
