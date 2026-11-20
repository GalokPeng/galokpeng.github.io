import { defineConfig } from 'vite';

export default defineConfig({
  build: { license: { fileName: 'THIRD-PARTY-LICENSES.txt' } },
  server: {
    watch: { ignored: ['**/.qa/**'] },
    fs: { deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/.qa/**'] },
  },
});
