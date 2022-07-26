import dyRequest from "../../index"
import { IDataType } from "@/service/types"

export function getPageListData(url: string, queryInfo: any) {
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

export function createPageData(url: string, newData: any) {
  return dyRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return dyRequest.patch<IDataType>({
    url,
    data: editData
  })
}
