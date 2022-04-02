import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ImportPage from "../views/Import.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/import", component: ImportPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
