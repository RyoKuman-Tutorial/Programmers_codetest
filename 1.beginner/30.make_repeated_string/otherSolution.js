function solution1(my_string, n) {
  isValid(n); // 유효성 검사
  return [...my_string].map((v) => v.repeat(n)).join(""); // map 을 좀더 잘 활용한 사례, repeat 사용법 알아두자
}

function solution2(my_string, n) {
  isValid(n); // 유효성 검사
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), ""); // reduce 활용
}

function isValid(my_string, n) {
  // 유효성 검사
  const regex = /^[a-zA-Z]+$/;
  if (n < 2 || n > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (my_string.length < 2 || my_string.length > 5) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
