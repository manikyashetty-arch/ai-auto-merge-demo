/** Compute the delay (ms) before retry attempt N. */
export function retryDelay(attempt: number): number {
  // Exponential growth with a cap
  const exponentialDelay = 1000 * 2 ** attempt;
  return Math.min(exponentialDelay, 30000);
}
