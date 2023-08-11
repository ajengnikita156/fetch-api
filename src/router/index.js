import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Kategori from "../views/Kategori.vue";

import Login from "../views/Login.vue";
import store from "../store/index";
import Surah from "../views/Surah.vue";
import SingleSurah from "../views/SingleSurah.vue";




const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/kategori/",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/surah",
    name: "Surah",
    component: Surah,
  },
  {
    path: "/surah/:number",
    name: "SingleSurah",
    component: SingleSurah,
    props: true,
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
    next("/"); // Redirect to Home
  } else {
    next();
  }
});

export default router;
