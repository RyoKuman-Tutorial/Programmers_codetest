# [소수 판별법](./solution.js)

```js
function isPrime(n) {
  const a = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) if (a[i]) for (let j = i * i; j <= n; j += i) a[j] = false;

  return a[n];
}
```

[에라토스테네스의 체](../eratosthenes_sieve/solution.js) 를 활용한다. <br/>
에라스토테네스의 체로 인해, 소수인 index 를 가진 value 값은 true 가 되고, <br/>
때문에, n 을 index 로써 전달하면, 해당 값이 소수인지, 아닌지 판별할 수 있다.
