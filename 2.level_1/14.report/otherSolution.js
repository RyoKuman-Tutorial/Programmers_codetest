// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution1(id_list, report, k) {
  // 최적
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  }); // 중복 제거 및 배열화

  let counts = new Map(); // 신고 횟수
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1); // get or default as 1
    // 각 report 의 1번은 피신고자이다.
  }

  let mail = new Map(); // 매일 횟수
  for (const report of reports) {
    // 중복 제거된 reports 활용
    if (counts.get(report[1]) >= k) {
      // 각 report 의 1번은 피신고자이다.
      mail.set(report[0], mail.get(report[0]) + 1 || 1); // 피신고자가 k와 같거나 더 많이 신고당한 경우, 받을 메일을 추가해준다
    }
  }

  let answer = id_list.map((a) => mail.get(a) || 0);
  return answer;
}

function solution2(id_list, report, k) {
  const newRepo = [...new Set(report)]; // report 중복 제거
  const out = []; // 정지 아이디
  const count = Array.from({ length: id_list.length }, (v, i) => 0); // 신고수 [0,0,0,0]
  const mail = Array.from({ length: id_list.length }, () => 0); // 메일수 [0,0,0,0]

  newRepo.forEach((v) => {
    const arr = v.split(" ");

    let id = arr[1]; // 유저가 신고한 ID
    let idxId = id_list.indexOf(id); // id_list에서 신고받은 유저의 index 칮기
    count[idxId] += 1; // 신고받은 유저의 신고수 누적 더하기

    // 신고수가 k개 이상인 경우
    if (count[idxId] >= k) {
      // 정지 리스트에 해당 아아디 추가
      out.push(id_list[idxId]);
    }
  });

  // 메일
  newRepo.forEach((v) => {
    const arr = v.split(" ");
    let id = arr[0]; // 유저 ID
    let reported = arr[1]; // 유저가 신고한 ID

    // 신고한 ID(b)에 정지된 ID가 있는지 확인
    if (out.indexOf(reported) >= 0) {
      // 신고한 ID 중에 정지된 ID가 있다면,
      // 해당 유저(a)의 id_list에서의 인덱스를 구하고
      // mail의 해당 인덱스에 1 더하기
      let idx = id_list.indexOf(id);
      mail[idx] += 1;
    }
  });

  return mail;
}
