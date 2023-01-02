# 설명

[other solution](./otherSolution.js) 의 풀이가 특이하였기에 그에 대한 설명

## 조건

```
a,b = sides 의 원소
x = return 할 값

a >= b
```

각각의 미지수는 위 처럼 정해두겠다

### x 가 세 변중에 제일 큰 변일 경우

```
x < a + b
```

### a 가 세 변중에 제일 큰 변일 경우

```
a < x + b
a - b < x
```

### x 의 범위

```
a - b < x < a + b
```

### 결론,

```
x 의 개수는

a + b - ( a - b ) - 1
a + b - a + b - 1
2b - 1
```
