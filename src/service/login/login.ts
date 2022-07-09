import dyRequest from "@/service"
import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return dyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return dyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenuById(id: number) {
  return dyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu"
  })
}
