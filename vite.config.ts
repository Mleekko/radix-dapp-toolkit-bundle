import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    plugins: [viteSingleFile()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'RDT',
            fileName: 'radix-dapp-toolkit.bundle',
        },
    },
})
