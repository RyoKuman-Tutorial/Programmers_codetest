// 제한 사항 : 1 ≤ ingredient의 길이 ≤ 1,000,000 , ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(ingredient) {
  validator(ingredient);
  let count = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; ++i) {
    stack.push(ingredient[i]);

    if (stack.length < 4) continue;

    if (
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      for (let j = 0; j < 4; ++j) {
        stack.pop();
      }
      count++;
    }
  }

  return count;
}

function validator(ingredient) {
  if (ingredient.length < 1 || ingredient.length > 1000000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
