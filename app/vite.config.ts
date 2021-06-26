import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { name, version } from './package.json';

export default defineConfig({
  plugins: [reactRefresh()],
  define: {
    pkgJson: { name, version }
  },
})
