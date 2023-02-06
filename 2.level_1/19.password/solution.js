// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();
  const arr = Array.from({ length: z - a + 1 }, (_, i) => String.fromCharCode(i + a)).filter((e) => !skip.includes(e));

  return [...s]
    .map((e) => {
      let idx = arr.indexOf(e) + index;
      while (arr.length - 1 < idx) idx -= arr.length;
      return arr[idx];
    })
    .join("");
}
