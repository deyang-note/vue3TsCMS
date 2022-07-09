import { createStore } from "vuex"
import { IRootState } from "@/store/type"
import login from "./login/login"

const store = createStore<IRootState>({
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

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export default store
