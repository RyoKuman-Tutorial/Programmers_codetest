// 제한 사항 : 1 ≤ s의 길이 ≤ 10,000 , s은 영어 소문자로만 이루어져 있습니다.
// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution1(s, count = 0) {
  validator(s);
  if (!s) return count; // 전달받은 문자열이 없는 경우, count를 리턴해준다.
  let [first, ...rest] = s.split(""); // fisrt 로 나눠주고, 나머지는 rest 에 할당
  let countSame = 1; // countSame 의 기본값은 1
  let countInSame = 0; // countInsame 의 기본값은 0
  let i = 0; // i = 0
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++; // first 와 같은 게 나오면 countSame++
    else countInSame++; // first 와 같은 게 아니면 countSame++
    if (countSame === countInSame) break; // countSame , countInsame 값이 같으면 break
  }
  return solution1(rest.slice(i + 1).join(""), count + 1); // rest 를 읽힌 값만큼 잘라내고 재할당, count에 1을 더해준다.
}

// solution1 과 같은 풀이지만, count 대신에 result 사용
function solution1_1(s, result = []) {
  validator(s);
  if (!s) return result.length; // 전달받은 문자열이 없는 경우, result.length 를 리턴해준다.
  let [first, ...rest] = s.split(""); // fisrt 로 나눠주고, 나머지는 rest 에 할당
  let countSame = 1; // countSame 의 기본값은 1
  let countInSame = 0; // countInsame 의 기본값은 0
  let i = 0; // i = 0
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++; // first 와 같은 게 나오면 countSame++
    else countInSame++; // first 와 같은 게 아니면 countSame++
    if (countSame === countInSame) break; // countSame , countInsame 값이 같으면 break
  }
  result.push(first + rest.slice(0, i + 1)); // 지금까지 읽은 모든 값들을 result 에 할당
  return solution1_1(rest.slice(i + 1).join(""), result); // rest 를 읽힌 값만큼 잘라내고 재할당
}

function solution2(s) {
  validator(s);
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      // count 가 0 일 때 아래를 실행
      answer++;
      current = s[i]; // current 값을 바꿔줌
      count = 1; // 채ㅕ
    } else {
      if (current !== s[i]) count--; // x 값과 다른 값을 만나면 count--
      else count++; // x 값과 같은 값을 만나면 count++
    }
  }

  return answer; // answer 값을 return
}

// 전체적으로 나누기보단 나누어진 값에 대해 관심이 더 많은 듯 하다.

function validator(s) {
  if (s.length < 1 || s.length > 10000) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (/[^a-z]/.test(s)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
