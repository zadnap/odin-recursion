function fibs(n) {
  if (n <= 0) return "Invalid Length";
  if (n == 1) return [0];

  const fib_sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fib_sequence[i] = fib_sequence[i - 1] + fib_sequence[i - 2];
  }

  return fib_sequence;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibsRec(n - 1);
  sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

  return sequence;
}
