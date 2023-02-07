function solution(new_id) {
  const regex = /[a-z0-9\-\_\.]/;

  new_id = new_id.toLowerCase(); // lev 1
  new_id = [...new_id].filter((e) => regex.test(e)).join(""); // lev 2
  new_id = [...new_id].reduce((acc, cur) => ("." === cur && [...acc].pop() === cur ? acc : [...acc, cur]), []).join(""); // lev3

  const arrLv4 = [...new_id]; // lev4
  if ([...new_id].pop() === ".") arrLv4.pop();
  if ([...new_id].shift() === ".") arrLv4.shift();
  new_id = arrLv4.join("");

  new_id = new_id === "" ? "a" : new_id; // lev5

  const arrLv6 = [...new_id]; // lev6
  arrLv6.length = 15;
  if ([...arrLv6].pop() === ".") arrLv6.pop();
  new_id = arrLv6.join("");

  const char = [...new_id].pop(); // lev7
  while (new_id.length < 3) new_id += char;

  return new_id;
}

// 40m
