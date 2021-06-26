import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { name, version } from "./package.json";
import path from "path";
import typescript2 from "rollup-plugin-typescript2";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      name: "coreui",
    },
    outDir: "./lib",
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
  plugins: [
    reactRefresh(),
    {
      ...typescript2(),
      apply: "build",
    },
  ],
  define: {
    pkgJson: { name, version },
  },
});
