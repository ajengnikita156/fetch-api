import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue"
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Checksatu from "../views/Checksatu.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";



const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
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
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/pembayaran",
    name: "Checksatu",
    component: Checksatu,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
});

export default router;
