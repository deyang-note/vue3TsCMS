import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (token) {
      return "/login"
    }
  }
})

export default router
