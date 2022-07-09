import { accountLoginRequest } from "@/service/login/login";
const loginModule = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: {}
        };
    },
    getters: {},
    mutations: {
        changeToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload) {
            console.log("执行accountLoginAction...", payload);
            // 1.实现登陆逻辑
            const loginResult = await accountLoginRequest(payload);
            const { id, token } = loginResult.data;
        },
        phoneLoginAction({ commit }, payload) {
            console.log("执行phoneLoginAction...", payload);
        }
    }
};
export default loginModule;
//# sourceMappingURL=login.js.map