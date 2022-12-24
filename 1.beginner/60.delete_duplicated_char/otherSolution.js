function solution(my_string) {
  validator(my_string);
  return [...new Set(my_string)].join(""); // set 활용
  // index 는 set 으로 변하더라도 my_string 을 따라간다
}

function validator(my_string) {
  // 유효성 검사
  if (my_string < 1 || my_string > 110) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-zA-Z\s]/.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
