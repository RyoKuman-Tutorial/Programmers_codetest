function isPrime1(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
}

function isPrime2(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) if (n % i == 0 || n % (i + 2) == 0) return false;
  // 제곱근 까지만 확인하되 6의 배수 기준으로 확인할 것
  // 모든 6의 배수 ±1 이 소수인 것은 아니지만, 2와 3을 제외한 소수는 모두 6의 배수 ±1 로 표현할 수 있다

  return true;
}

function isPrime3(num) {
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) if (num % i === 0) return false;
  // 한 번이라도 나누어 졌으니 소수가 아니므로 return false

  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
