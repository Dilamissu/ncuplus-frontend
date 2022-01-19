import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import FontAwesomeIcon from "@/plugins/fontawesome-icons";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
