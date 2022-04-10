import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    base: process.env.VITE_APP_BASE_URL || "/",
    resolve: {
      alias: {
        "~/": "src/",
      },
    },
    server: {
      open: true,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: "build",
      sourcemap: mode === "development",
      minify: command === "build" ? "esbuild" : false,
    },
    plugins: [
      react({
        exclude: /\.stories\.(t|j)sx?$/,
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
  };
});
