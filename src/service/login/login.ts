import dyRequest from "@/service"
import IAccount from "@/service/login/type"

enum LoginAPI {
  AccountLogin = "/login"
}

export function accountLoginRequest(account: IAccount) {
  return dyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
