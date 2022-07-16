import { ILoginState } from "@/store/login/type"
import { ISystemState } from "@/store/main/system/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
