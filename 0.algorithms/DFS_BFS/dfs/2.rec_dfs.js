function solution(target) {
  const result = [];
  DFS(target, result);
  return result;
}

const DFS = (el, result) => {
  if (!result.includes(el)) result.push(el);
  const values = Object.values(el);
  values.forEach((v) => DFS(v, result));
};

function test() {
  const graph = {
    a: {
      b: {
        d: { g: {}, h: {} },
        e: { i: {} },
      },
      c: { f: {} },
    },
  };

  return solution(graph);
}
