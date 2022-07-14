import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"

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
  },
  {
    path: "/:pathMatch(.*)*",
    name: "bot-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  if (to.path === "/main") {
    return firstMenu.url
  }
})

export default router
