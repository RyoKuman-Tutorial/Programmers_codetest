// 제한 사항 : 1 ≤ s의 길이 ≤ 10,000 , s은 영어 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution1(s) {
  validator(s);
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1; // hash 에 v 에 해당하는 값이 있는지 검색 후에, 있으면 현재 값의 인덱스에서 해당 값을 뺸다.
    hash[v] = i; // hash 에 현재 char: index 를 저장, 이를 통해 제일 뒤에 있는 char 의 index 값을 hash 는 항상 저장하고 있는다.
    return result; // -1 혹은 현재 v 보다 앞에 있는 char 중에서 제일 뒤에 있는 값의 index 를 현재 index 에서 뺀 값
  });
}

function solution2(s) {
  validator(s);

  return [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char); // s 를 0부터 현재 index 까지 잘라낸 이후, char 의 lastIndex 를 받아내어 count 에 넣는다.
    // lastIndexOf 는 결과를 찾아내지 못하면 -1 을 반환한다.
    return count < 0 ? count : i - count; // count 가 0 보다 작을 경우, 즉 해당하는 index 를 찾지 못하여 -1 을 반환한 경우, -1 을 그대로 사용. 있는 경우 두 index 값의 차를 반환
  });
}

function validator(s) {
  if (s.length < 1 || s.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-z]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
