# 집합의 분할

## 1. 공식

```js
P(n,k) = P(n-k,1) + P(n-k,2) + ... + P(n-k,k)
```

## 2. 증명

1. 원소의 갯수가 1 인 집합이 존재할 경우,

총 집합의 수가 아무리 많더라도, 원소가 1인 집합이 존재하는 경우는
원소기 1인 집합 + n-1 개의 원소를 가진 집합을 k-1 개로 분할하는 경우의 수와 같다.

2. 원소의 갯수가 1 인 집합이 존재하지 않을 경우

원소의 갯수가 1인 집합이 존재하지 않을 경우
랜덤한 수 a 를 제외한 n-1 개의 원소를 가진 집합을 k 개로 분할하는 경우의 수에
k 를 곱한것과 같다.

## 3. 특성

```js
S(n,n) = S(n,1) = 1
```