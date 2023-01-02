// 제한사항 : spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다 , 2 ≤ spell의 크기 ≤ 10 , spell의 원소의 길이는 1입니다 , 1 ≤ dic의 크기 ≤ 10
//          1 ≤ dic의 원소의 길이 ≤ 10 , spell의 원소를 모두 사용해 단어를 만들어야 합니다 , spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다
//          dic과 spell 모두 중복된 원소를 갖지 않습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  validator(spell, dic);
  return dic.filter((e) => spell.filter((v) => e.includes(v)).length === spell.length).length !== 0 ? 1 : 2;
}

function validator(spell, dic) {
  if ([...spell, ...dic].filter((e) => /[^a-z]/.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (spell.length < 2 || spell.length > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (spell.filter((e) => e.length !== 1).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (dic.length < 1 || dic.length > 10) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
  if (spell.filter((e) => e.length < 1 || e.length > 10).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 5
}
