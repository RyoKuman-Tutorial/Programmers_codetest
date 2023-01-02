// 제한사항 : 회원들의 아이디는 문자열입니다 , 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다 , 회원들의 패스워드는 숫자로 구성된 문자열입니다 , 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
//          id_pw의 길이는 2입니다 , id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다 , 1 ≤ 아이디의 길이 ≤ 15 , 1 ≤ 비밀번호의 길이 ≤ 6 , 1 ≤ db의 길이 ≤ 10 , db의 원소의 길이는 2입니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  return db.reduce((acc, cur) => (cur[0] === id_pw[0] ? (cur[1] === id_pw[1] ? "login" : "wrong pw") : acc), "fail");
}
