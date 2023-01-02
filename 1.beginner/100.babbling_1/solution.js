function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  const result = babbling.filter((e) => {
    let str = e;
    const thisWords = words.filter((e) => str.includes(e));
    thisWords.forEach((v) => (str = str.replaceAll(v, 1)));
    str = str.replaceAll(1, "");
    return str.length === 0;
  });

  return result.length;
}
