import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载所有默认的 routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // ./system/menu/menu.ts
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  // 2.根据菜单获取需要添加的 routes

  return routes
}
