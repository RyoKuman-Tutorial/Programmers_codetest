// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const newTerm = new Map();
  const newToday = new Date(today);
  const result = [];

  terms.forEach((v) => {
    const arr = v.split(" ");
    newTerm.set(arr[0], arr[1]); // 약관 exp time 정리하기
  });

  privacies.forEach((v, i) => {
    const arr = v.split(" ");
    const expTime = getExpTime(arr[0], newTerm.get(arr[1]));
    if (expTime <= newToday) result.push(i + 1);
  });

  return result;
}

function getExpTime(str, terms) {
  let now = new Date(str);
  const result = new Date(str);
  result.setMonth(now.getMonth() + Number(terms));

  return result;
}
