import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import { createPinia } from "pinia";
const app = createApp(App);

app.use(router);

app.use(createPinia()).mount("#app");
