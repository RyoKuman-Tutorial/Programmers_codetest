function solution1(numbers) {
  validator(numbers);
  numbers.sort((a, b) => a - b); // sort 를 통해 정렬하면, 절댓값이 제일 큰 수가 배열 맨앞, 맨 뒤에 있게된다.
  return Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]); // 절댓값이 제일 큰 수들의 곱이 무조건적으로 제일 클 수밖에 없다는걸 활용
}

function solution2(numbers) {
  validator(numbers);

  const getAllMult = (numbers) => {
    return numbers.reduce((acc, cur, idx, arr) => {
      const tempArr = [];
      for (let i = idx + 1; i < arr.length; i++) tempArr.push(cur * arr[i]);
      return [...acc, ...tempArr];
    }, []);
  };

  return Math.max(...getAllMult(numbers)); // sort 대신 max 를 활용,
}

function validator(numbers) {
  // 유효성 검사
  if (numbers.filter((e) => e < -10000 || e > 10000).length !== 0) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 1
  if (numbers.length < 2 || numbers.length > 100) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError , 제한사항 2
}
