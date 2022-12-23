// 제한사항 : 1 ≤ s1, s2의 길이 ≤ 100 , 1 ≤ s1, s2의 원소의 길이 ≤ 10 , s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다 , s1과 s2는 각각 중복된 원소를 갖지 않습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  isValid(s1); // 유효성 검사
  isValid(s2); // 유효성 검사

  const result = s1.reduce((array, e) => {
    if (s2.includes(e)) array.push(e);
    return array;
  }, []);

  return result.length;
}

function isValid(value) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  const duplicateCheck = value.reduce((array, e) => {
    if (!array.includes(e)) array.push(e);
    return array;
  }, []);

  if (value > 100 || value < 1) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (value.filter((e) => e.length < 1 || e.length > 10).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (value.filter((e) => !regex.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (duplicateCheck.length !== value.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
