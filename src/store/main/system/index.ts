import { Module } from "vuex"
import { ISystemState } from "@/store/main/system/types"
import { IRootState } from "@/store/type"

import { getPageListDate } from "@/service/main/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { url, queryInfo } = payload
      const pageResult = await getPageListDate(url, queryInfo)
      const { list, totalCount } = pageResult.data
      commit("changeUserList", list)
      commit("changeUserCount", totalCount)
    }
  }
}

export default systemModule
