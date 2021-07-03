import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

import { name, version } from "./package.json";

export default defineConfig({
  build: {
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        // Global vars to use in UMD build for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
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
