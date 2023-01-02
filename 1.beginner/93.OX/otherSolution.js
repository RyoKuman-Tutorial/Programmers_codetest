function solution(quiz) {
  return quiz.map((e) => {
    const [calc, result] = e.split(" = "); // result, clac 을 구조분해할당
    const sign = calc.includes("+") ? 1 : -1; // + 면 1, 아니라면  -1
    const [a, b] = calc.split(sign === 1 ? " + " : " - "); // 부호가 + 면, + 기준으로 split

    return +a + +b * sign === +result ? "O" : "X"; // a, b result 전부 다 숫자로 형변환, sign 에 따라 1 혹은 -1 을 곱함
    // Number(a) + sign(Number(b)) 라고 보면 됨
  });
}
