// 제한사항 : chicken은 정수입니다 , 0 ≤ chicken ≤ 1,000,000
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  validator(chicken);
  let services = 0;

  while (chicken >= 10) {
    services += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }

  return services;
}

function validator(chicken) {
  if (!Number.isInteger(chicken)) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (chicken < 0 || chicken > 1000000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
}
