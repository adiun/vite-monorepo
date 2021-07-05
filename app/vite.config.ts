import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

import { name, version } from "./package.json";

export default defineConfig({
  define: {
    pkgJson: { name, version },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [reactRefresh()],
  server: {
    open: true,
  },
});
