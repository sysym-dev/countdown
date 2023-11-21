import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useClickOutside } from './plugins/click-outside.js';

const app = createApp(App);

useClickOutside(app);

app.mount('#app');
