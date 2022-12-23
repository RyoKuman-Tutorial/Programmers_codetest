// 제한사항 : 0 < rsp의 길이 ≤ 100 , rsp와 길이가 같은 문자열을 return 합니다 , rsp는 숫자 0, 2, 5로 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120839

function solution(rsp) {
  isValid(rsp);
  return rsp
    .split("")
    .map((e) => {
      if (e === "0") return "5";
      if (e === "2") return "0";
      if (e === "5") return "2";
    })
    .join("");
}

function isValid(rsp) {
  // 유효성 검사
  if (rsp.length <= 0 || rsp.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (!/^[205]+$/.test(rsp)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
