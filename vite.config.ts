import { defineConfig } from "vite";
import { resolve, relative, extname } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { glob } from "glob";

export default defineConfig({
    plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            formats: ["es"],
        },
        rollupOptions: {
            external: ["react", "react/jsx-runtime"],
            input: Object.fromEntries(
                glob
                    .sync("lib/**/*.{ts,tsx}", {
                        ignore: ["lib/**/*.d.ts", "lib/**/*.stories.tsx"],
                    })
                    .map((file) => [
                        relative(
                            "lib",
                            file.slice(0, file.length - extname(file).length)
                        ),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ])
            ),
            output: {
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js",
            },
        },
    },
});
