import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsx from './src/plugins/index';
import AutoImport from 'unplugin-auto-import/vite';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        DefineOptions(),
        vueJsx(),
        AutoImport({
            imports: ['vue'],
            dts: 'src/aut-import.d.ts',
        }),
    ],
});
