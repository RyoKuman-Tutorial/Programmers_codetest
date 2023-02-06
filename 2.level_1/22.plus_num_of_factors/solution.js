// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;

  for (let i = 0; i <= right - left; i++) {
    const num = left + i;
    const factors = getFactorsNum(num);
    if (factors % 2 === 0) result += num;
    else result -= num;
  }

  return result;
}

function getFactorsNum(num) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) factors.push(i, num / i);
  }

  return [...new Set(factors)].length;
}
