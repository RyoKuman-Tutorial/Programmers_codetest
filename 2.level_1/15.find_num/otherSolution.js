// 제한 사항 : 1 ≤ survey의 길이 ( = n) ≤ 1,000 , survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다 , choices의 길이 = survey의 길이 , 1 ≤ choices의 원소 ≤ 7
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  validator(survey, choices);
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

function validator(survey, choices) {
  if (survey.length < 1 || survey.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (survey.filter((v) => /[^"RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"]/.test(v)).length !== 0)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (survey.length !== choices.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (choices.filter((v) => v < 1 || v > 7).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
