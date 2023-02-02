// 제한 사항 : 2 ≤ food의 길이 ≤ 9 , 1 ≤ food의 각 원소 ≤ 1,000 , food에는 칼로리가 적은 순서대로 음식의 양이 담겨 있습니다.
//           food[i]는 i번 음식의 수입니다, food[0]은 수웅이가 준비한 물의 양이며, 항상 1입니다, 정답의 길이가 3 이상인 경우만 입력으로 주어집니다
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  validator(food);
  const left = [];
  const right = [];
  food.forEach((v, i) => {
    let j = Math.floor(v / 2);
    while (j !== 0) {
      left.push(i);
      right.unshift(i);
      j--;
    }
  });

  return left.join("") + "0" + right.join("");
}

function validator(food) {
  if (food.length < 2 || food.length > 9) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (food.filter((v) => v < 1 || v > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
