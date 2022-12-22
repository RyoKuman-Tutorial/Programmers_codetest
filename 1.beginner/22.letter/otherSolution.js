function solution1(message) {
  isValid(message); // 유효성 검사
  return message.length * 2; // 문자열도 length 를 property 로써 가지고 있다.
}

function isValid(message) {
  // 유효성 검사
  const regex = /^([a-zA-Z]|\s|!|~)+$/;
  if ((message.length > 50, message.length < 1)) throw new TypeError(); // 유효성 검사를 통과하지 못할 경우, typeError
}
