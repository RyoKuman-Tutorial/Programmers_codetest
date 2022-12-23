// 제한사항 : 1 ≤ array의 길이 ≤ 100 , 0 ≤ array 원소 ≤ 1,000 , array에 중복된 숫자는 없습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(array) {
  validator(array);
  return array.reduce(
    ([num, index], cur, i) => {
      if (cur > num) {
        num = cur;
        index = i;
      }
      return [num, index];
    },
    [0, 0]
  );
}

function validator(array) {
  // 유효성 검사
  if (array.length < 1 || array.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (array.filter((e) => e < 0 || e > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if ([...new Set(array)].length !== array.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
