import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": "http://192.168.8.113:3032",
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
