function solution(array, commands) {
  return commands
    .map((e) => Array.from({ length: e[1] - e[0] + 1 }, (_, i) => array[e[0] + i - 1]).sort((a, b) => a - b))
    .map((e, i) => e[commands[i][2] - 1]);
}
