import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import Card from './components/Card.vue';
// import useResize from 'constom-hooks';

const app = createApp(App);
app.config.globalProperties.$env = 'dev';
app.config.globalProperties.$formate ={
    format<T>(str: T) {
        return 'dawei-' + str;
    }

}
// app.use(useResize);
app.use(ElementPlus);
app.component('Card', Card);
app.mount('#app');

type Filter = {
    format<T>(str: T): string;
};
declare module 'vue' {
    export interface ComponentCustomProperties {
        $formate: Filter;
        $env: string;
    }
}