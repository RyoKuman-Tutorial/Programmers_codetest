// 제한 사항 : 3 ≤ k ≤ 100 , 7 ≤ score의 길이 ≤ 1,000 , 0 ≤ score[i] ≤ 2,000
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution1(k, score) {
  validator(k, score);
  const stack = []; // 명예의 전당
  return score.reduce((a, c) => {
    if (stack.length < k) {
      // 명예의 전당이 아직 다 차지 않았을 떄
      stack.push(c);
      stack.sort((a, b) => a - b); // 올림차순
    } else {
      // 명예의 전당이 다 찼을때
      stack.push(c);
      stack.sort((a, b) => a - b); // 올림차순
      stack.shift();
    }
    a.push(stack[0]); // 최솟값 추가
    return a;
  }, []);
}

function validator(k, score) {
  if (k < 3 || k > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (score.length < 7 || score.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (score.filter((e) => e < 0 || e > 2000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
