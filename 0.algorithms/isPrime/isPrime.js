function isPrime(n) {
  const a = new Array(n + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) if (a[i]) for (let j = i * i; j <= n; j += i) a[j] = false;
  return a[n];
}
