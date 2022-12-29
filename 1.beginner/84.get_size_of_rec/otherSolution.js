function solution1(dots) {
  validator(dots);

  const x = dots.reduce((acc, cur) => [...acc, cur[0]], []);
  const y = dots.reduce((acc, cur) => [...acc, cur[1]], []);

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)); // 모든 변이 x || y 축에 평행하기에 사용 가능한 방법
}

function validator(dots) {
  if (dots.length !== 4) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (dots.filter((e) => e.length !== 2).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 2
  if (dots.filter((e) => e.filter((e) => Math.abs(e) >= 256).length !== 0).length !== 0) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 3
}
