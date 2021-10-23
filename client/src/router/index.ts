import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Collections from "../views/Collections.vue";
import Collection from "../views/Collection.vue";
import PageNotFound from "../views/404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/collections",
    name: "Collections",
    component: Collections,
  },
  {
    path: "/collections/:id",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
