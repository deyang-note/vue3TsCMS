import { Module } from "vuex"
import { IDashboardState } from "./types"
import { IRootState } from "@/store/type"
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard"
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      const categorySaleResult = await getCategoryGoodsSale()
      const categoryFavorResult = await getCategoryGoodsFavor()
      const addressGoodsSaleResult = await getAddressGoodsSale()

      commit("changeCategoryGoodsCount", categoryCountResult.data)
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      commit("changeAddressGoodsSale", addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
