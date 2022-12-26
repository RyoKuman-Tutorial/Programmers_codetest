function solution1(my_string) {
  const arr = my_string.split(" ").filter((e) => e);
  while (arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift()); // shift 활용
  return arr[0];
}
