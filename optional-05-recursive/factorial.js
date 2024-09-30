function factorial(n) {
  // Basis: jika n adalah 0 atau 1, faktorialnya adalah 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Rekursi: faktorial dari n adalah n * faktorial(n - 1)
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
