function solution1(n) {
  let arr = [];
  let num = 0;

  while (arr.length !== n && ++num) if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num); // while 활용법 배워감
  return arr.pop();
}

function solution2(n) {
  let arr = [];
  let num = 0;

  while (arr.length !== n) {
    if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
    num++; // 이 방법이 상대적으로 좀 더 가독성이 좋다
  }

  return arr.pop();
}

function validator(n) {
  if (n < 1 || n > 100) throw new TypeError(); // 유효성 검증 실패 시, typeError , 제한사항 1
}
