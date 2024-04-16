import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      components:"/src/components",
      api:"/src/api",
      Image:"/src/Image",
      pages:"/src/pages",
      helpers:"/src/helpers",
      NewsBanner:"/src/NewsBanner",
      NewsItem:"/src/NewsItem",
      NewsList:"/src/NewsList"
    }
  },
  plugins: [react()],
})
