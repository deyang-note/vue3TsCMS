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
      await router.push("/main")
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction...", payload)
    }
  }
}

export default loginModule
