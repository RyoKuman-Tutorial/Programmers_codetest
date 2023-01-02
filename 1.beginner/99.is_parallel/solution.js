function solution(dots) {
  const lines = [];
  dots.forEach((el, idx) => {
    for (let i = idx + 1; i < dots.length; i++) {
      lines.push((el[0] - dots[i][0]) / (el[1] - dots[i][1]));
    }
  });

  return [...new Set(lines)].length === lines.length ? 0 : 1;
}
