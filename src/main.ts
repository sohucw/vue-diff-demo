import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue';
const app = createApp(App);
app.component('Card', Card);
app.mount('#app');
