import { defineConfig } from "wxt";
import react from '@vitejs/plugin-react';

export default defineConfig({
    // My WXT config
    srcDir: "src",
    entrypointsDir: "entriePoints",
    vite: () => ({
        plugins: [react()],
      }),
});
