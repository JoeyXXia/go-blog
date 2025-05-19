import xxRequest from '../index'
import type { Model, PageInfo } from '@/services/types/common'

export interface Image extends Model {
  name: string
  url: string
  category: string
  storage: string
}

export interface ImageUploadResponse {
  url: string
  ossType: string
}

export interface ImageDeleteRequest {
  ids: number[]
}

export const imageDelete = (data: ImageDeleteRequest) => {
  return xxRequest.delete({
    url: '/image/delete',
    data: data,
  })
}

export interface ImageListRequest extends PageInfo {
  name: string | null
  category: string | null
  storage: string | null
}

export const imageList = (data: ImageListRequest) => {
  return xxRequest.get({
    url: '/image/list',
    params: data,
  })
}
