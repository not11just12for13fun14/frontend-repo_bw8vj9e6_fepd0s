import { defineConfig } from 'vite'

// Minimal Vite config for a single-file index.html app.
// - No React plugin (not needed for plain HTML/Three.js)
// - Ensure server stays up with HMR/watch enabled by default
// - Serve from project root where index.html lives
export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // Use Vite defaults for HMR and watcher (both enabled)
    hmr: true,
  },
});
