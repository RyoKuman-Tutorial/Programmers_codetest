function solution1(my_string) {
  isValid(my_string);
  let answer;
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase(); // 삼항연산자 이용
  return answer;
}

function isValid(my_string) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  if (my_string < 1 || my_string > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
