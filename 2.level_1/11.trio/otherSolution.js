// 제한 사항 : 3 ≤ number의 길이 ≤ 13 , -1,000 ≤ number의 각 원소 ≤ 1,000 , 서로 다른 학생의 정수 번호가 같을 수 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  validator(number);
  let result = 0; // 배열 사용 안함

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++)
      for (let k = j + 1; k < number.length; k++) if ([number[i], number[j], number[k]]) result++;
  }

  return result;
}

function validator(number) {
  if (number.length < 3 || number.length > 13) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (number.filter((v) => v < -1000 || v > 1000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
