import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "@/store/type"
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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
