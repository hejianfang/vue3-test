import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/table",
    component: () => import("../views/List.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
