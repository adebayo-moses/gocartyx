import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from 'vue';

import './assets/main.css';

const app = createApp(App);

app.use(router);

app.mount('#app');

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app');
