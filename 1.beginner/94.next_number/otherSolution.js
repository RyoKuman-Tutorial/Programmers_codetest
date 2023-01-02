function solution(common) {
  validator(common);

  if (common[1] - common[0] == common[2] - common[1]) return common.pop() + common[1] - common[0];
  return (common.pop() * common[1]) / common[0];

  // 공비가 1 인 등비수열 때문에 위 방법을 사용하지 않았음,
  // 하지만 공비가 1 인 등비수열은 공비가 0인 등차수열이기도 하다, 때문에 제한사항에 제한되므로 위 방법이 맞다.
}

function validator(common) {
  if (common.length <= 2 || common.length >= 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (common.some((e) => e <= -1000 || e >= 2000)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
