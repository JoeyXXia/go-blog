import xxRequest from '../index'
import type { Model, PageInfo } from '@/services/types/common'

export interface Comment extends Model {
  article_id: string
  p_id: number | null
  children: Comment[]
  user_uuid: string
  content: string
}

export interface CommentCreateRequest {
  article_id: string
  p_id: number | null
  content: string
}

export const commentCreate = (data: CommentCreateRequest) => {
  return xxRequest.post({
    url: '/comment/create',
    data: data,
  })
}

export interface CommentDeleteRequest {
  ids: number[]
}

export const commentDelete = (data: CommentDeleteRequest) => {
  return xxRequest.delete({
    url: '/comment/delete',
    data: data,
  })
}

export const commentInfo = () => {
  return xxRequest.get({
    url: '/comment/info',
  })
}

export const commentInfoByArticleID = (article_id: string) => {
  return xxRequest.get({
    url: '/comment/' + article_id,
  })
}

export const commentNew = () => {
  return xxRequest.get({
    url: '/comment/new',
    method: 'get',
  })
}

export interface CommentListRequest extends PageInfo {
  article_id: string | null
  user_uuid: string | null
  content: string | null
}

export const commentList = (data: CommentListRequest) => {
  return xxRequest.get({
    url: '/comment/list',
    params: data,
  })
}
