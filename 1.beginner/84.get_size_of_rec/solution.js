// 제한사항 : dots의 길이 = 4 , dots의 원소의 길이 = 2 , -256 < dots[i]의 원소 < 256 , 잘못된 입력은 주어지지 않습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  validator(dots);
  const sides = dots
    .reduce((acc, cur) => [...acc, (dots[0][0] - cur[0]) ** 2 + (dots[0][1] - cur[1]) ** 2], [])
    .sort((a, b) => b - a);

  const result = Math.sqrt(sides[1]) * Math.sqrt(sides[2]);

  return result;
}

function validator(dots) {
  if (dots.length !== 4) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (dots.filter((e) => e.length !== 2).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
  if (dots.filter((e) => e.filter((e) => Math.abs(e) >= 256).length !== 0).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 3
}
