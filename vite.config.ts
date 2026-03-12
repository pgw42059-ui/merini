import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: "/", // 커스텀 도메인 merini.com

    server: {
      host: "::",
      port: process.env.PORT ? parseInt(process.env.PORT) : 8080,
    },

    plugins: [
      react(),                 // ✅ CSP-safe
      isDev && componentTagger(), // 개발에서만
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      target: "es2018",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router-dom"],
            "vendor-ui": ["@radix-ui/react-slot", "@radix-ui/react-toast", "@radix-ui/react-tooltip", "lucide-react"],
            "vendor-query": ["@tanstack/react-query"],
            "vendor-helmet": ["react-helmet-async"],
          },
        },
      },
    },
  };
});
