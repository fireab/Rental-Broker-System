import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			// "/api": "http://localhost:3032",
		},
	},
	build: {
		// outDir: "./../server/public",
		// 	// watch: {
		// 	// 	""
		// 	// },
		// 	rollupOptions: {
		// 		input: {
		// 			main: "./index.html",
		// 			// nested: "./nested/index.html",
		// 		},
		// 	},
	},
});
