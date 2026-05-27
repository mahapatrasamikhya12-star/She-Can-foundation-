import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Add this line to force the build into a static format
  vite: {
    build: {
      ssr: false, 
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
