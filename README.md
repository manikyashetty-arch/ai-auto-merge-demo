# ai-auto-merge demo

A staged scenario for testing [ai-auto-merge](https://github.com/manikyashetty-arch/ai-auto-merge).

Two open PRs each improve the retry backoff on the **same line** of `src/retry.ts`:

- **#1 feature/exponential-backoff** — exponential backoff (`1000 * 2 ** i`)
- **#2 feature/jitter** — adds random jitter (`1000 + random*500`)

## Test it

1. Install your ai-auto-merge GitHub App on this repo.
2. Merge **one** of the PRs into `main`.
3. The other PR now conflicts. Within ~30s the app should resolve it,
   push a fix to its branch, and comment with the resolution + cost.

A good resolution combines both intents, e.g. `sleep(1000 * 2 ** i + Math.random() * 500)`.

You can also comment `/ai-merge status` or `/ai-merge dry-run` on the conflicting PR.
