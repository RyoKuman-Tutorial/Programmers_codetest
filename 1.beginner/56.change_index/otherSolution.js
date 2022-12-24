function solution1(my_string, num1, num2) {
  validator(my_string, num1, num2);
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join(""); // 아직 이해하지 못했다
}

function validator(my_string, num1, num2) {
  // 유효성 검사
  if (my_string <= 1 || my_string >= 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (num1.length < 0 || num2.length < 0 || num1.length >= my_string.length || num2.length >= my_string.length)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  // if (!/[a-z]/g.test(my_string)) throw new TypeError();
  // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3 하지만 위 제한사항은 지켜지지 않으므로 패스
  if (num1 === num2) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
