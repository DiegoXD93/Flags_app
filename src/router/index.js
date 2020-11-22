import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Flags",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Flags.vue"),
  },
  {
    path: "/:cod",
    name: "Flag",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Flag.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
