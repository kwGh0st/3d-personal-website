import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/kwGh0st/kwGh0st.git",
  plugins: [react()],
});
