// 제한사항 : 1 ≤ letter의 길이 ≤ 1,000 , return값은 소문자입니다 , letter의 모스부호는 공백으로 나누어져 있습니다 , letter에 공백은 연속으로 두 개 이상 존재하지 않습니다.
//          해독할 수 없는 편지는 주어지지 않습니다 , 편지의 시작과 끝에는 공백이 없습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120838
const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter) {
  validator(letter);
  return letter
    .split(" ")
    .map((e) => morse[e])
    .join("");
}

function validator(letter) {
  // 유효성 검사
  if (letter < 1 || letter > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
}
