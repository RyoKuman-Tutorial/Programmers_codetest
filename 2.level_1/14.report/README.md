# 문제 풀이 시 알아야만 하는 것들

## 1. map 활용

```js
const input = "input";
const a = new Map();
a.set(input, a.get(input) + 1 || 1);
```

위 코드대로 진행할 경우, a 에 값이 있는 경우 +1 을, 값이 없는 경우 1을 할당하도록 할 수 있다. <br/>
java 의 getOrDefault 처럼 사용한다.
