import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { name, version } from "./package.json";
const path = require("path");

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "coreui",
    },
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
  plugins: [reactRefresh()],
  define: {
    pkgJson: { name, version },
  },
});
