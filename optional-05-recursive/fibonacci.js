function fibonacci(n) {
  // Basis: Fibonacci dari 0 adalah 0, dari 1 adalah 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Rekursi: Fibonacci(n) adalah Fibonacci(n-1) + Fibonacci(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
