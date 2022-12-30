function solution(a, b) {
  const c = a % b;
  let result;

  if (c !== 0) result = solution(b, c);
  else result = b;

  return result;
}
