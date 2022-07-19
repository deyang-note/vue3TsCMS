import { Module } from "vuex"
import { ISystemState } from "@/store/main/system/types"
import { IRootState } from "@/store/type"

import { getPageListDate } from "@/service/main/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取 pageUrl
      const { queryInfo, pageName } = payload
      let pageUrl = ""
      switch (pageName) {
        case "user":
          pageUrl = "/users/list"
          break
        case "role":
          pageUrl = "/role/list"
          break
      }

      // 2.对页面发送请求
      const pageResult = await getPageListDate(pageUrl, queryInfo)

      // 3.将数据存储到 state中
      const { list, totalCount } = pageResult.data
      switch (pageName) {
        case "user":
          commit("changeUserList", list)
          commit("changeUserCount", totalCount)
          break
        case "role":
          commit("changeRoleList", list)
          commit("changeRoleCount", totalCount)
          break
      }
    }
  }
}

export default systemModule
