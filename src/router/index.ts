import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "login",
  //   name: "Login",
  //   component: import(/* webpackChunkName: "login" */ "../views/login")
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
