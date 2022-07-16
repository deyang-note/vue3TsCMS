import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "@/store/type"

import login from "./login/login"
import system from "./main/system"

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
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
