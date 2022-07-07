import { Module } from "vuex"
import { ILoginState } from "@/store/login/type"
import { IRootState } from "@/store/type"
import { accountLoginRequest } from "@/service/login/login"
import IAccount from "@/service/login/type"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      console.log("执行accountLoginAction...", payload)
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction...", payload)
    }
  }
}

export default loginModule
