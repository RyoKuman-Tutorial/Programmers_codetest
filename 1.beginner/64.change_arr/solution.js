// 제한사항 : num_list의 길이는 n의 배 수개입니다 , 0 ≤ num_list의 길이 ≤ 150 , 2 ≤ n < num_list의 길이
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  validator(num_list, n);
  return num_list.reduce((acc, cur, idx) => {
    if (idx % n === 0) return [...acc, [cur]];
    else {
      acc[Math.floor(idx / n)].push(cur);
      return acc;
    }
  }, []);
}

function validator(num_list, n) {
  if (num_list.length % n !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (num_list.length < 0 || num_list > 150) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (n < 2 || n >= num_list.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
