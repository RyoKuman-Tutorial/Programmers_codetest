function formular(a, b) {
  let arr = new Array(a).fill(1);
  for (let i = 0; i < b; i++) arr = arr.reduce((acc, cur) => [...acc, cur + ([...acc].pop() || 1)], []);
  return arr.pop();
}
