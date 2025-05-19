import xxRequest from '../index'
import type { PageInfo, Model } from '@/services/types/common'

export interface Feedback extends Model {
  user_uuid: string
  content: string
  reply: string
}

export interface FeedbackCreateRequest {
  content: string
}

export const feedbackCreate = (data: FeedbackCreateRequest) => {
  return xxRequest.post({
    url: '/feedback/create',
    data: data,
  })
}

export const feedbackInfo = () => {
  return xxRequest.get({
    url: '/feedback/info',
  })
}

export interface FeedbackDeleteRequest {
  ids: number[]
}

export const feedbackDelete = (data: FeedbackDeleteRequest) => {
  return xxRequest.delete({
    url: '/feedback/delete',
    data: data,
  })
}

export interface FeedbackReplyRequest {
  id: number
  reply: string
}

export const feedbackReply = (data: FeedbackReplyRequest) => {
  return xxRequest.patch({
    url: '/feedback/reply',
    data: data,
  })
}

export const feedbackList = (data: PageInfo) => {
  return xxRequest.get({
    url: '/feedback/list',
    params: data,
  })
}

export const feedbackNew = () => {
  return xxRequest.get({
    url: '/feedback/new',
  })
}
