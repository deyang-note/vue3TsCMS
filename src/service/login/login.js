import dyRequest from "@/service"
var LoginAPI
;(function (LoginAPI) {
  LoginAPI["AccountLogin"] = "/login"
})(LoginAPI || (LoginAPI = {}))
export function accountLoginRequest(account) {
  return dyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
//# sourceMappingURL=login.js.map
