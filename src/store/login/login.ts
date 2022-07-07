import { Module } from "vuex"
import { ILoginState } from "@/store/login/type"
import { IRootState } from "@/store/type"

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
    accountLoginAction({ commit }, payload: any) {
      console.log("执行accountLoginAction...", payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log("执行phoneLoginAction...", payload)
    }
  }
}

export default loginModule
