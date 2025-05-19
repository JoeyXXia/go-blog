import xxRequest from '../index'
import type { PageInfo } from '@/services/types/common'

export interface Article {
  created_at: string
  updated_at: string

  cover: string
  title: string
  keyword: string
  category: string
  tags: string[]
  abstract: string
  content: string

  views: number
  comments: number
  likes: number
}

export interface ArticleLikeRequest {
  article_id: string
}

export const articleLike = (data: ArticleLikeRequest) => {
  return xxRequest.post({
    url: '/article/like',
    data: data,
  })
}

export const articleIsLike = (data: ArticleLikeRequest) => {
  return xxRequest.get({
    url: '/article/isLike',
    params: data,
  })
}

export const articleLikesList = (data: PageInfo) => {
  return xxRequest.get({
    url: '/article/likesList',
    params: data,
  })
}

export interface ArticleCreateRequest {
  cover: string
  title: string
  category: string
  tags: string[]
  abstract: string
  content: string
}

export const articleCreate = (data: ArticleCreateRequest) => {
  return xxRequest.post({
    url: '/article/create',
    data: data,
  })
}

export interface ArticleDeleteRequest {
  ids: string[]
}

export const articleDelete = (data: ArticleDeleteRequest) => {
  return xxRequest.delete({
    url: '/article/delete',
    data: data,
  })
}

export interface ArticleUpdateRequest {
  id: string
  cover: string
  title: string
  category: string
  tags: string[]
  abstract: string
  content: string
}

export const articleUpdate = (data: ArticleUpdateRequest) => {
  return xxRequest.patch({
    url: '/article/update',
    data: data,
  })
}

export interface ArticleListRequest extends PageInfo {
  title: string | null
  category: string | null
  abstract: string | null
}

export const articleList = (data: ArticleListRequest) => {
  return xxRequest.get({
    url: '/article/list',
    params: data,
  })
}

export const articleInfoByID = (id: string) => {
  return xxRequest.get({
    url: '/article/' + id,
  })
}

export interface ArticleSearchRequest extends PageInfo {
  query: string
  category: string
  tag: string
  sort: string
  order: string
}

export const articleSearch = (data: ArticleSearchRequest) => {
  return xxRequest.get({
    url: '/article/search',
    params: data,
  })
}

export interface ArticleCategory {
  category: string
  number: number
}

export const articleCategory = () => {
  return xxRequest.get({
    url: '/article/category',
  })
}

export interface ArticleTag {
  tag: string
  number: number
}

export const articleTags = () => {
  return xxRequest.get({
    url: '/article/tags',
  })
}
