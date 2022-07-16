import dyRequest from "@/service"
import { IAccount, ILoginResult } from "./type"
import { IDataType } from "../types"

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
