import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "mini",
  //   component: () => import("@/views/mini/index.vue"),
  // },
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "/bookkeeping",
        name: "bookkeeping",
        component: () => import("@/views/bookkeeping/index.vue"),
      },
      {
        path: "/memorandum",
        name: "memorandum",
        component: () => import("@/views/memorandum/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
