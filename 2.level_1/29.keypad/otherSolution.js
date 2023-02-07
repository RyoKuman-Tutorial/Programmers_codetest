const pad = {
  fin: {
    right: [0, 0],
    left: [2, 0],
  },
  numbers: {
    1: [0, 3],
    4: [0, 2],
    7: [0, 1],

    2: [1, 3],
    5: [1, 2],
    8: [1, 1],
    0: [1, 0],

    3: [2, 3],
    6: [2, 2],
    9: [2, 1],
  },
};

function solution(numbers, hand) {
  const result = numbers.map((v) => {
    if (/1|4|7/.test(v)) {
      pad.fin.left = pad.numbers[v];
      return "L";
    }
    if (/3|6|9/.test(v)) {
      pad.fin.right = pad.numbers[v];
      return "R";
    }
    if (/2|5|8|0/.test(v)) return closeOne(v, hand);
  });

  return result.join("");
}

function closeOne(num, hand) {
  const rightLen = pad.fin.right.reduce((a, c, i) => a + Math.abs(pad.numbers[num][i] - c), 0);
  const leftLen = pad.fin.left.reduce((a, c, i) => a + Math.abs(pad.numbers[num][i] - c), 0);
  if (rightLen > leftLen) {
    pad.fin.left = pad.numbers[num];
    return "L";
  }
  if (rightLen < leftLen) {
    pad.fin.right = pad.numbers[num];
    return "R";
  }
  if (rightLen === leftLen) {
    pad.fin[hand] = pad.numbers[num];
    return hand.toUpperCase().slice(0, 1);
  }
}

// 24m;
