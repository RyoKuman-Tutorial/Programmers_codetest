// 제한사항 : 1 ≤ strlist 원소의 길이 ≤ 100 , strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120854

function solution(strlist) {
  isValid(strlist); // 유효성 검사
  return strlist.map((e) => e.length);
}

function isValid(strlist) {
  // 유효성 검사
  const regex = /^[a-zA-Z|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+$/;
  if (strlist.filter((e) => e.length > 100 || e.length < 1 || !regex.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
