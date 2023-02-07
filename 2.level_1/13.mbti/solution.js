// 제한 사항 : 1 ≤ survey의 길이 ( = n) ≤ 1,000 , survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다 , choices의 길이 = survey의 길이 , 1 ≤ choices의 원소 ≤ 7
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  validator(survey, choices);

  const scores = { RT: 0, TR: 0, CF: 0, FC: 0, JM: 0, MJ: 0, NA: 0, AN: 0 };

  survey.forEach((v, i) => (scores[v] += choices[i] - 4));

  let result = "";
  result += scores.RT - scores.TR <= 0 ? "R" : "T";
  result += scores.CF - scores.FC <= 0 ? "C" : "F";
  result += scores.JM - scores.MJ <= 0 ? "J" : "M";
  result += scores.AN - scores.NA <= 0 ? "A" : "N";

  return result;
}

function validator(survey, choices) {
  if (survey.length < 1 || survey.length > 1000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (survey.filter((v) => /[^"RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"]/.test(v)).length !== 0)
    throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
  if (survey.length !== choices.length) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
  if (choices.filter((v) => v < 1 || v > 7).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 3
}
