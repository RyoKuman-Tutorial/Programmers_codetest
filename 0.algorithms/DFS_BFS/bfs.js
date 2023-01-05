function BFS(nodes, firstNode) {
  const visited = [];
  const queue = [firstNode];
  const result = [];

  while (nodes.length !== visited.length) {
    let node = queue.shift();

    visited.push(node);
    queue.push(...node.filter((e) => typeof e !== "number" && !visited.includes(e) && !queue.includes(e)));
    result.push(...node.filter((e) => typeof e === "number"));
  }

  return [queue, visited, result];
}

function test() {
  const node1 = [1];
  const node2 = [2];
  const node3 = [3];
  const node4 = [4];

  node1.push(node2);
  node2.push(node3);
  node2.push(node4);
  node4.push(node3);

  const nodes = [node1, node2, node3, node4];

  console.log(BFS(nodes, node1));
}
