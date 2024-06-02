import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgrPlugin({
			icon: true,
		}),
	],
	resolve: {
		alias: {
			"@pages": "/src/pages",
			"@components": "/src/components",
			"@assets": "/src/assets",
			"@MOCKS": "/src/MOCKS",
			"@types": "/src/types",
			"@contexts": "/src/contexts",
			"@hooks": "/src/hooks",
		},
	},
});
