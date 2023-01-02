// 제한사항 : board는 n * n 배열입니다 , 1 ≤ n ≤ 100 , 지뢰는 1로 표시되어 있습니다 , board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  validator(board);
  const bombLoc = getBombLoc(board);
  const dangerLoc = getDangerLoc(bombLoc);
  dangerLoc.forEach((e) => {
    if (!e.includes(-1)) if (board[e[0]]) if (board[e[1]]) board[e[0]][e[1]] = 1;
  });

  return board.length ** 2 - board.flat(1).filter((e) => e === 1).length;
}

function getBombLoc(board) {
  const locX = board.reduce((acc, cur, idx) => (cur.includes(1) ? [...acc, idx] : acc), []);
  const loc = locX.reduce(
    (acc1, cur1) => [
      ...acc1,
      ...board[cur1].reduce((acc2, cur2, idx2) => (cur2 === 1 ? [...acc2, [cur1, idx2]] : acc2), []),
    ],
    []
  );

  return loc;
}

function getDangerLoc(bombLoc) {
  const result = bombLoc
    .map((e) => {
      const arr = [];
      for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) arr.push([e[0] + i, e[1] + j]);
      return arr;
    })
    .flat(1);

  return result;
}

function validator(board) {
  if (board.some((e) => e.length !== board.length)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (board.length < 1 || board.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (board.some((e) => e.some((e) => /[^01]/.test(e)))) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
