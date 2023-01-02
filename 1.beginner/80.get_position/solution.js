// 제한사항 : board은 [가로 크기, 세로 크기] 형태로 주어집니다 , board의 가로 크기와 세로 크기는 홀수입니다 , board의 크기를 벗어난 방향키 입력은 무시합니다 , 0 ≤ keyinput의 길이 ≤ 50
//          1 ≤ board[0] ≤ 99 , 1 ≤ board[1] ≤ 99 , keyinput은 항상 up, down, left, right만 주어집니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(keyinput, board) {
  validator(keyinput, board);

  const keyResult = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
  const xMax = (board[0] - 1) / 2;
  const yMax = (board[1] - 1) / 2;
  const result = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    for (let j = 0; j < 2; j++) result[j] += keyResult[keyinput[i]][j];
    if (result[0] > xMax) result[0] = xMax;
    if (result[0] < -xMax) result[0] = -xMax;
    if (result[1] > yMax) result[1] = yMax;
    if (result[1] < -yMax) result[1] = -yMax;
  }

  return result;
}

function validator(keyinput, board) {
  if (board.filter((e) => e % 2 === 0).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (keyinput.length < 0 || keyinput.length > 50) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (board.filter((e) => e < 0 || e > 99).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 4,5
  if (keyinput.filter((e) => !/up|down|left|right/.test(e)).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 6
}
