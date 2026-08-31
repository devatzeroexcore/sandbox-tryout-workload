# Sandbox tryout workload

A minimal Vite + React + TypeScript SPA used as the identical workload for the
Cloudflare Sandbox vs Fly.io Sprites tryout. It is intentionally tiny so the
sandbox platform — not the app — dominates every measurement.

## Publish as a clonable repo

Both sandboxes `git clone` this from a remote, so push it somewhere reachable:

```sh
git init
git add .
git commit -m "initial workload"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main

# Create a second branch so "checkout a branch" is a real step:
git checkout -b feature/styling
# (make a small visible change, e.g. tweak the <h1> in src/App.tsx)
git commit -am "feature branch tweak"
git push -u origin feature/styling
```

The harness reads the repo and branch from env vars (`REPO_URL`, `BRANCH`), so
any SPA repo with at least one branch can be substituted.
