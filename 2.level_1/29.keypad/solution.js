function solution(numbers, hand) {
  let right = [0, 0];
  let left = [0, 0];

  return numbers
    .map((v) => {
      if (v === 1) {
        left = [0, 3];
        return "L";
      }
      if (v === 4) {
        left = [0, 2];
        return "L";
      }
      if (v === 7) {
        left = [0, 1];
        return "L";
      }

      if (v === 3) {
        right = [2, 3];
        return "R";
      }
      if (v === 6) {
        right = [2, 2];
        return "R";
      }
      if (v === 9) {
        right = [2, 1];
        return "R";
      }

      if (v === 2) {
        const [result, pos] = closeOne(right, left, [1, 3], hand);
        result === "L" ? (left = pos) : (right = pos);
        return result;
      }
      if (v === 5) {
        const [result, pos] = closeOne(right, left, [1, 2], hand);
        result === "L" ? (left = pos) : (right = pos);
        return result;
      }
      if (v === 8) {
        const [result, pos] = closeOne(right, left, [1, 1], hand);
        result === "L" ? (left = pos) : (right = pos);
        return result;
      }
      if (v === 0) {
        const [result, pos] = closeOne(right, left, [1, 0], hand);
        result === "L" ? (left = pos) : (right = pos);
        return result;
      }
    })
    .join("");
}

function closeOne(right, left, pos, hand) {
  const rightLen = right.reduce((a, c, i) => a + Math.abs(pos[i] - c), 0);
  const leftLen = left.reduce((a, c, i) => a + Math.abs(pos[i] - c), 0);
  if (rightLen > leftLen) return ["L", pos];
  if (rightLen < leftLen) return ["R", pos];
  if (rightLen === leftLen) return [hand.toUpperCase().slice(0, 1), pos];
}

// 24m;
