// 제한사항 : 1 ≤ cipher의 길이 ≤ 1,000 , 1 ≤ code ≤ cipher의 길이 , cipher는 소문자와 공백으로만 구성되어 있습니다 , 공백도 하나의 문자로 취급합니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  isValid(cipher, code);
  return cipher
    .split("")
    .filter((_, i) => (i + 1) / code > 0 && (i + 1) % code === 0)
    .join("");
}

function isValid(cipher, code) {
  // 유효성 검사
  const regex = /^[a-z\s]+$/;
  if (cipher.length < 1 || cipher.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (code.length < 1 || code.length > cipher.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (!regex.test(cipher)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
