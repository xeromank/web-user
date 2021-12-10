import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import { globalCookiesConfig } from "vue3-cookies";
import i18n from './i18n'
import common from "@/assets/js/common";

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});

axios.defaults.baseURL = "http://localhost:8200";

const app = createApp(App).use(i18n).use(common);
app.config.globalProperties.axios = axios;
app.use(store).use(router).mount('#app');
