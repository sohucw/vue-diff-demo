import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import Card from './components/Card.vue';
import useResize from 'constom-hooks';

const app = createApp(App);
app.use(useResize);
app.use(ElementPlus);
app.component('Card', Card);
app.mount('#app');
