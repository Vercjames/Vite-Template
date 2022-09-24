import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"


// https://vitejs.dev/config/
// =====================================================================================================================
// =====================================================================================================================
export default defineConfig(({ command, mode }: any) => {
  const env = loadEnv(mode, process.cwd(), "")
  return {
    plugins: [
      react(),
    ],
    publicDir: "client-assets",
    build: {
      outDir: "build",
    },
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./client-apps"),
        "@assets": path.resolve(__dirname, "./client-assets"),
        "@configs": path.resolve(__dirname, "./client-configs"),
        "@schemas": path.resolve(__dirname, "./client-schemas"),
        "@MSTRoot": path.resolve(__dirname, "./client-schemas/mobx-tree/mobx-root.tsx"),
        "@MSTContext": path.resolve(__dirname, "./client-schemas/mobx-tree/mobx-context.tsx"),
        "@MSTInterfaces": path.resolve(__dirname, "./client-schemas/mobx-tree/mobx-interfaces.tsx"),
        "@styles": path.resolve(__dirname, "./client-apps/globals/global-styles"),
        "@globals": path.resolve(__dirname, "./client-apps/globals"),
        "@helpers": path.resolve(__dirname, "./client-apps/helpers"),
        "@comps": path.resolve(__dirname, "./client-apps/comps"),
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})
