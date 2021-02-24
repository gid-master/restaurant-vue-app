import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import interceptors from "./interceptors";
import directives from "./directives";
import createMock from "./mocks";
import axio from "vue-axios";

const isMockEnabled = Boolean(process.env.VUE_APP_BACKEND_TARGET === "mock");
if (isMockEnabled) {
  createMock();
}

createApp(App)
  .use(store)
  .use(router)
  .use(axio, interceptors)
  .directive("image-fallback", directives.imageFallback)
  .mount("#app");
