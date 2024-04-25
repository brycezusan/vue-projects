import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add",
      name: "add-client",
      component: () => import("../views/AddView.vue"),
    },
    {
      path:"/registros/:id",
      name:"registro-editar",
      component : ()=> import("../views/EditView.vue")
    }
  ],
});

export default router;
