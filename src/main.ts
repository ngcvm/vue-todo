import { createApp, h } from "vue";
import App from "./App.vue";
import "vue-toast-notification/dist/theme-sugar.css";
import "./index.css";
import VueToast from "vue-toast-notification";
import router from "./router";

const app = createApp({
  render() {
    return h(App);
  },
});

app.use(VueToast);
app.use(router);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.config.errorHandler = (error: any, vm: any, info: any) => {
  app.config.globalProperties.$toast.open({
    message: "Toast is working!",
    type: "success",
    duration: 10000,
  });
};

app.mount("#app");
