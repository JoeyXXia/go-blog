import xxRequest from '../index'
import type { PageInfo, Model } from '@/services/types/common'

export interface FriendLink extends Model {
  logo: string
  link: string
  name: string
  description: string
}

export interface FriendLinkInfoResponse {
  list: FriendLink[]
  total: number
}

export const friendLinkInfo = () => {
  return xxRequest.get({
    url: '/friendLink/info',
  })
}

export interface FriendLinkCreateRequest {
  logo: string
  link: string
  name: string
  description: string
}

export const friendLinkCreate = (data: FriendLinkCreateRequest) => {
  return xxRequest.post({
    url: '/friendLink/create',
    data: data,
  })
}

export interface FriendLinkDeleteRequest {
  ids: number[]
}

export const friendLinkDelete = (data: FriendLinkDeleteRequest) => {
  return xxRequest.delete({
    url: '/friendLink/delete',
    data: data,
  })
}

export interface FriendLinkUpdateRequest {
  id: number
  link: string
  name: string
  description: string
}

export const friendLinkUpdate = (data: FriendLinkUpdateRequest) => {
  return xxRequest.patch({
    url: '/friendLink/update',
    data: data,
  })
}

export interface FriendLinkListRequest extends PageInfo {
  name: string | null
  description: string | null
}

export const friendLinkList = (data: FriendLinkListRequest) => {
  return xxRequest.get({
    url: '/friendLink/list',
    params: data,
  })
}
