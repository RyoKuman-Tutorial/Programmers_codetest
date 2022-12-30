function solution(a, b) {
  validator(a, b);
  const gcd = getGCD(...[a, b].sort((a, b) => b - a));
  let result = b / gcd;

  while (result % 2 === 0) result /= 2; // 2로 전부 나누기
  while (result % 5 === 0) result /= 5; // 5로 전부 나누기

  return result === 1 ? 1 : 2; // result 가 1 이 아니라면, 2 혹은 5 를 제외한 약수가 존재한다는 뜻이다.
}

function getGCD(a, b) {
  const c = a % b;
  let result;

  if (c !== 0) result = getGCD(b, c);
  else result = b;

  return result;
}

function validator(a, b) {
  if (a <= 0 || a > 1000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
  if (b <= 0 || b > 1000) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
}
