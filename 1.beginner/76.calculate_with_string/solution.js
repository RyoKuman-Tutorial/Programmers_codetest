// 제한사항 : 연산자는 +, -만 존재합니다 , 문자열의 시작과 끝에는 공백이 없습니다 , 0으로 시작하는 숫자는 주어지지 않습니다 , 잘못된 수식은 주어지지 않습니다
//          5 ≤ my_string의 길이 ≤ 100 , my_string을 계산한 결과값은 1 이상 100,000 이하입니다 , my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
//          계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다 , my_string에는 연산자가 적어도 하나 포함되어 있습니다 , return type 은 정수형입니다
//          my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  const arr = my_string.split(" ");

  let result;
  let number;
  let operator;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) result = Number(arr[i]);
    else if (/[0-9]/.test(arr[i])) number = Number(arr[i]);
    else if (arr[i] === "+") operator = arr[i];
    else if (arr[i] === "-") operator = arr[i]; // 수 넣기

    if (number !== false) {
      if (operator == "+") result += number;
      else if (operator === "-") result -= number;
      number = false;
    } // 계산
  }

  return result;
}

// 제한사항이 너무 많아서, validator 생략...
