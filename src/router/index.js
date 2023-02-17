import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView/HomeView.vue"
import LoginView from "../views/loginView/LoginView.vue"
import SignupView from "../views/signupView/SignupView.vue"
import AboutView from "../views/AboutView/AboutView.vue"
import ContactView from "../views/ContactView/ContactView.vue"
import product from "../views/product/productView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    ,
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    { 
      path: "/product/:id", 
      name: "product", 
      component: product 
    },
  ],
})

export default router
