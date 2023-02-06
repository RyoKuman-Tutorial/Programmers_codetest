// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  const reuslt = (count * (price + price * count)) / 2 - money;
  return reuslt < 0 ? 0 : reuslt;
}
