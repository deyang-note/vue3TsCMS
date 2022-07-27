import { Module } from "vuex"
import { ILoginState } from "@/store/login/type"
import { IRootState } from "@/store/type"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuById
} from "@/service/login/login"
import { IAccount } from "@/service/login/type"
import localCache from "@/utils/cache"
import { mapMenusToPermissions, mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"
import store from "@/store"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // userMenus => routes
      // const userMenus = (store.state as any).login.userMenus
      const routes = mapMenusToRoutes(userMenus)
      // 将 routes => router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

      // 发送初始化的请求（完整的role/department）
      dispatch("getInitialDataAction", null, { root: true })

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenuById(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4.跳转到首页
      await router.push("main")
    },

    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) commit("changeToken", token)

      // 发送初始化的请求（完整的role/department）
      dispatch("getInitialDataAction", null, { root: true })

      const userInfo = localCache.getCache("userInfo")
      if (userInfo) commit("changeUserInfo", userInfo)

      const userMenus = localCache.getCache("userMenus")
      if (userMenus) commit("changeUserMenus", userMenus)
    },

    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction...", payload, commit)
    }
  }
}

export default loginModule
