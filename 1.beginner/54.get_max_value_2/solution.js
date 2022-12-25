// 제한사항 : -10,000 ≤ numbers의 원소 ≤ 10,000 , 2 ≤ numbers 의 길이 ≤ 100
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120862

function getAllMult(numbers) {
  return numbers.reduce((acc, cur, idx, arr) => {
    const tempArr = [];
    for (let i = idx + 1; i < arr.length; i++) tempArr.push(cur * arr[i]);
    return [...acc, ...tempArr];
  }, []);
}

function solution(numbers) {
  validator(numbers);
  return getAllMult(numbers).sort((a, b) => b - a)[0];
}

function validator(numbers) {
  // 유효성 검사
  if (numbers.filter((e) => e < -10000 || e > 10000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (numbers.length < 2 || numbers.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
