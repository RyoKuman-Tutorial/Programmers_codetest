function solution(balls, share) {
  validator(balls, share);
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  );
}

function validator(balls, share) {
  if (balls < 1 || balls > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (share < 1 || share > 30) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (share > balls) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
