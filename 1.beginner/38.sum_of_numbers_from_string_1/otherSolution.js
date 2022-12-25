// 제한사항 : 1 ≤ my_string의 길이 ≤ 1,000 , my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution1(my_string) {
  isValid(my_string); // 유효성 검사
  return my_string
    .replace(/[^0-9]/g, "") // 숫자 제외 전부 삭제
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0); // replace 를 활용한 방법
}

function isValid(my_string) {
  // 유효성 검사
  const regex = /^[a-zA-Z0-9]+$/;
  const continuousNumberCheck = my_string.split("").filter((a, b) => a === b);

  if (my_string.length < 1 || my_string.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!regex.test(my_string)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2-1
  if (continuousNumberCheck.length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2-2 ( 한 자리수 자연수로만 구성 )
}
