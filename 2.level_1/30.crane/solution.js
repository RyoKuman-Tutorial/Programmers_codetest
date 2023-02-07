function solution(board, moves) {
  const newBoard = [];
  let result = [];

  for (let i = 0; i < board.length; i++) {
    const arr = [];
    for (let j = 0; j < board.length; j++) if (board[j][i]) arr.push(board[j][i]);
    newBoard.push(arr);
  }

  moves.forEach((e) => result.push(newBoard[e - 1].shift()));
  result = result.filter((e) => e != null);
  return getArr(result);
}

function getArr(arr, disapear = 0) {
  let num = 0;

  const result = arr.reduce((acc, cur) => {
    if ([...acc].pop() === cur) {
      acc.pop();
      num++;
      disapear += 2;
      return acc;
    } else return [...acc, cur];
  }, []);

  return num !== 0 ? getArr(result, disapear) : disapear;
}

// 24m
