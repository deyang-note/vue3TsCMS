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
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
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
      mapMenusToRoutes(userMenus)

      // 将 routes => router.main.children
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log("执行accountLoginAction...", payload)
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

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
      console.log("跳转到用户首页")
      await router.push("main")
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) commit("changeToken", token)

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
