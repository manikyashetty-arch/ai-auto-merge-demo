/** Compute the delay (ms) before retry attempt N. */
export function retryDelay(attempt: number): number {
  return 1000 * 2 ** attempt;
}
