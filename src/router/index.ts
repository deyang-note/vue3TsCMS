import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import localCache from "@/utils/cache"
import { mapMenusToRoutes } from "@/utils/map-menus"
import store from "@/store"

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

    // userMenus => routes
    const userMenus = (store.state as any).login.userMenus
    const routes = mapMenusToRoutes(userMenus)

    // 将 routes => router.main.children
    routes.forEach((route) => {
      router.addRoute("main", route)
    })
  }
})

export default router
