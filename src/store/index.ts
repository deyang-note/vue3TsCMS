import { createStore } from "vuex"
import { IRootState } from "@/store/type"
import login from "./login/login"

export default createStore<IRootState>({
  state() {
    return {
      name: "chendeyang",
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
