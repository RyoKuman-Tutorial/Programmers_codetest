# 최대공약수와 최소공배수 구하기

# 1. [최대공약수](./getGCD.js)

```js
function getGCD(a, b) {
  const c = a % b;
  let result;

  if (c !== 0) result = solution(b, c);
  else result = b;

  return result;
}
```

[유클리드 호재법](../Euclidean_algorithm/README.md) 를 활용한다.

# 2. [최소공배수](./getLCM.js)

### 최소공배수와 최대공약수의 관계

### 가정

1. 최소공배수를 갖는 두 수 A 와 B 가 있다 할 때, A > B
2. A 와 B 사이의 최대공약수 = G
3. A 와 B 사이의 최소공배수 = L

```
A = aG
B = bG
```

A 와 B 는 각각 위처럼 표현할 수 있다. <br/>
위 경우, a 와 b 는 서로소이다. <br/>

```
L = a * b * G
L = aG * b
LG = aG * bG
L = ( aG * bG ) / G
```

최소공약수 또한 위 처럼 표현이 가능하다. <br/>

```js
function getLCM(a, b) {
  const gcd = getGCD(a, b);
  return a * b * gcd;
}

function getGCD(a, b) {
  const c = a % b;
  let result;

  if (c !== 0) result = solution(b, c);
  else result = b;

  return result;
}
```

결과적으로 위같은 코드로 최소공배수를 구하는 함수를 구할 수 있다. <br/>
