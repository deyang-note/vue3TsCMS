import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "@/store/type"

import login from "./login/login"
import system from "./main/system"

import { getPageListData } from "@/service/main/system"

const store = createStore<IRootState>({
  state() {
    return {
      name: "chendeyang",
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, departmentList) {
      state.entireDepartment = departmentList
    },
    chagneEntireRoleList(state, roleList) {
      state.entireRole = roleList
    },
    changeEntireMenuList(state, menuList) {
      state.entireMenu = menuList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 10
      })
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const meunResult = await getPageListData("/menu/list", {})

      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data
      const { list: menuList } = meunResult.data

      // 2.保存数据
      commit("changeEntireDepartment", departmentList)
      commit("chagneEntireRoleList", roleList)
      commit("changeEntireMenuList", menuList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  // store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
