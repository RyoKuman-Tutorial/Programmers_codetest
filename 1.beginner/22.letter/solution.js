// 제한사항 : 공백도 하나의 문자로 취급합니다 , 1 ≤ message의 길이 ≤ 50 , 편지지의 여백은 생각하지 않습니다 , message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120898

function solution(message) {
  isValid(message); // 유효성 검사
  return message.split("").length * 2;
}

function isValid(message) {
  // 유효성 검사
  const regex = /^([a-zA-Z]|\s|!|~)+$/;
  if ((message.split("").length > 50, message.split("").length < 1)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
