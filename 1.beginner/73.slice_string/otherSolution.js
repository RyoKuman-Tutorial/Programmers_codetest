function solution(my_str, n) {
  validator(my_str, n);
  return my_str.match(new RegExp(`.{1,${n}}`, "g")); // match 와, regex, new RegExp 사용한 이유는 n 을 사용하기 위해,
}

function validator(my_str, n) {
  if (my_str.length < 1 || my_str.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (n < 1 || n > my_str.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (/[^a-zA-Z0-9]/.test(my_str)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
