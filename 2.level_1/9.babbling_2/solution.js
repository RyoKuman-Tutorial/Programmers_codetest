// 제한 사항 : 1 ≤ babbling의 길이 ≤ 100 , 1 ≤ babbling[i]의 길이 ≤ 30 , 문자열은 알파벳 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  validator(babbling);
  const a = ["aya", "ye", "woo", "ma"];
  const replace = babbling.map((str) => {
    a.forEach((v, i) => (str = str.replace(v, i)));
    return str;
  });

  const numberCheck = replace.filter((v) => !/[a-z]/.test(v));

  const continuousCheck = numberCheck.filter(
    (v) =>
      v.length !== 0 &&
      [...v].reduce((acc, cur) => {
        if (acc) return acc === cur ? false : cur;
        return acc;
      }, 4)
  );

  return continuousCheck.length;
}

function validator(babbling) {
  if (babbling.length < 1 || babbling.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (babbling.filter((v) => v.length < 1 || v.length > 30).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (babbling.filter((v) => /[^a-z]/.test(v)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
