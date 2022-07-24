import dyRequest from "../../index"
import { IDataType } from "@/service/types"

export function getPageListDate(url: string, queryInfo: any) {
  return dyRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return dyRequest.delete<IDataType>({
    url
  })
}
