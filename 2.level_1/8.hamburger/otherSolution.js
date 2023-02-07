// 제한 사항 : 1 ≤ ingredient의 길이 ≤ 1,000,000 , ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(ingredient) {
  validator(ingredient);
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}

function validator(ingredient) {
  if (ingredient.length < 1 || ingredient.length > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
