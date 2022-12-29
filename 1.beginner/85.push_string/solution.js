// 제한사항 : 0 < A의 길이 = B의 길이 < 100 , A, B는 알파벳 소문자로 이루어져 있습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  validator(A, B);
  let reuslt = 0;
  const arrA = [...A];
  const arrB = [...B];

  for (let i = 0; i < A.length; i++) {
    if (arrA.join("") === arrB.join("")) return reuslt;
    arrA.unshift(arrA.pop());
    reuslt++;
  }

  return -1;
}

function validator(A, B) {
  if (A.length !== B.length || A.length <= 0 || A.length >= 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (/[^a-z]/.test(A) || /[^a-z]/.test(B)) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
}
