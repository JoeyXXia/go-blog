import xxRequest from '../index'
import type { Model, PageInfo } from '@/services/types/common'

export interface Advertisement extends Model {
  ad_image: string
  link: string
  title: string
  content: string
}

export interface AdvertisementInfoResponse {
  list: Advertisement[]
  total: number
}

export const advertisementInfo = () => {
  return xxRequest.get({
    url: '/advertisement/info',
  })
}

export interface AdvertisementCreateRequest {
  ad_image: string
  link: string
  title: string
  content: string
}

export const advertisementCreate = (data: AdvertisementCreateRequest) => {
  return xxRequest.post({
    url: '/advertisement/create',
    data: data,
  })
}

export interface AdvertisementDeleteRequest {
  ids: number[]
}

export const advertisementDelete = (data: AdvertisementDeleteRequest) => {
  return xxRequest.delete({
    url: '/advertisement/delete',
    data: data,
  })
}

export interface AdvertisementUpdateRequest {
  id: number
  link: string
  title: string
  content: string
}

export const advertisementUpdate = (data: AdvertisementUpdateRequest) => {
  return xxRequest.patch({
    url: '/advertisement/update',
    data: data,
  })
}

export interface AdvertisementListRequest extends PageInfo {
  title: string | null
  content: string | null
}

export const advertisementList = (data: AdvertisementListRequest) => {
  return xxRequest.get({
    url: '/advertisement/list',
    params: data,
  })
}
