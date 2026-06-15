/** Compute the delay (ms) before retry attempt N. */
export function retryDelay(attempt: number): number {
  return Math.min(1000, 30000);
}
