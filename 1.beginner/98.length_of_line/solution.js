function solution(lines) {
  validator(lines);
  const max = Math.max(...[...lines].flat());
  const min = Math.min(...[...lines].flat());

  const orderedLines = lines.map((e) => [e[0] - min, e[1] - min]);
  const palette = Array.from({ length: max - min + 1 }, () => 0);
  orderedLines.forEach((e) => {
    for (let i = e[0]; i < e[1]; i++) palette[i] += 1;
  });

  const result = palette.reduce((acc, cur, idx) => (/[^01]/.test(cur) ? [...acc, idx] : acc), []).sort((a, b) => a - b);

  return result.length;
}

function validator(lines) {
  if (lines.length !== 3) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (lines.some((e) => e.length !== 2)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (lines.some((e) => e[0] - e[1] === 0)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (lines.some((e) => e.some((e) => e < -100 || e > 100))) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4
}
