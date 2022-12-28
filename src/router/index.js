import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/index.vue";

const routes = [
  {
    path: "/",
    name: "mini",
    component: () => import("@/views/mini/index.vue"),
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
