export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>Sandbox Tryout SPA — feature/styling</h1>
      <p>
        Booted at <code>{new Date().toISOString()}</code>
      </p>
      <p>
        This is the shared workload for the Cloudflare Sandbox vs Fly.io Sprites
        tryout.
      </p>
    </main>
  );
}
