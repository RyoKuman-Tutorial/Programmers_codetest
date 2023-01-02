// 제한사항 : 2 < common의 길이 < 1,000 , -1,000 < common의 원소 < 2,000 , 등차수열 혹은 등비수열이 아닌 경우는 없습니다. , 공비가 0인 경우는 없습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  validator(common);
  const algorithm = getAlgorithm(common);
  if (algorithm === "geo") return common[common.length - 1] * (common[1] / common[0]);
  if (algorithm === "arith") return common[common.length - 1] + (common[1] - common[0]);
}

function getAlgorithm(common) {
  if (common[0] === 1 && common[1] === 1) return "geo";
  if (common[1] - common[0] === common[2] - common[1]) return "arith";
  return "geo";
}

function validator(common) {
  if (common.length <= 2 || common.length >= 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (common.some((e) => e <= -1000 || e >= 2000)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
