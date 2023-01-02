function solution(board) {
  validator(board);
  const outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  const safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;
    })
  );

  return safezone;
}

function validator(board) {
  if (board.some((e) => e.length !== board.length)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (board.length < 1 || board.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (board.some((e) => e.some((e) => /[^01]/.test(e)))) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
