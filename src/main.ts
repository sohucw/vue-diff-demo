import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
// import Card from './components/Card.vue';
// import useResize from 'constom-hooks';
// import Loading from './components/Loading/index';
// import { MyUse } from './myuse';
export const app = createApp(App);
// MyUse(Loading);
// app.use(Loading);
app.use(ElementPlus);
// app.component('Card', Card);
app.mount('#app');
// type Load = {
//     show: () => void;
//     hide: () => void;
// };
// //编写ts loading 声明文件放置报错 和 智能提示
// declare module 'vue' {
//     export interface ComponentCustomProperties {
//         $loading: Load;
//     }
// }