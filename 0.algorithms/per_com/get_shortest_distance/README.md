# 최단거리 경우의 수

## 1. 부분 중복 순열 활용

```js
( a + b )! / ( a! * b! )
```

2차원 공간에서 최단거리로 가는 방법에 필요한, <br/>
최단거리 이동은 2가지이며, 각각 필요 이동횟수를 a,b 라고 했을 때 <br/>
최단거리까지의 경우의 수는 위 부분중복 순열로 나타낼 수 있다. <br/>

## 2. [합의 법칙 이용](./formular.js)

![사진](https://blog.kakaocdn.net/dn/b7V8ed/btqHy6dU8SX/XmhNygUKw3TZIrOCz2YhQ1/img.png)

위 공식을 활용한 방법,
