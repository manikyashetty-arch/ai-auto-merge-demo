/** Retry an async operation a fixed number of times. */
export async function retry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      // Retrying with exponential backoff and a random jitter
      await sleep(1000 * 2 ** i + Math.random() * 500);
    }
  }
  throw new Error('unreachable');
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
