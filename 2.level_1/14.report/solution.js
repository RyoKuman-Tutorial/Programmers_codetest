// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const reports = new Map();
  const mail = new Array(id_list.length).fill(0);
  report = [...new Set(report)].map((v) => v.split(" "));

  report.forEach((v) => reports.set(v[1], reports.get(v[1]) + 1 || 1)); // 신고 횟수 정리
  report.forEach((v) => {
    if (reports.get(v[1]) >= k) mail[id_list.indexOf(v[0])]++;
  });

  return mail;
}
