function solution1(cipher, code) {
  isValid(cipher, code);
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    // for 활용
    answer += cipher[i];
  }
  return answer;
}

function isValid(cipher, code) {
  // 유효성 검사
  const regex = /^[a-z\s]+$/;
  if (cipher.length < 1 || cipher.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (code.length < 1 || code.length > cipher.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (!regex.test(cipher)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
