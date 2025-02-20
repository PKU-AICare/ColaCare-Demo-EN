import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { CarbonIconsVueResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        CarbonIconsVueResolver({
          prefix: 'Carbon'
        })
      ]
    }),
    Icons({ 
      compiler: 'vue3',
      autoInstall: true
    })
  ]
})