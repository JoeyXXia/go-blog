import xxRequest from '../index'

export interface Website {
  logo: string
  full_logo: string
  title: string
  slogan: string
  slogan_en: string
  description: string
  version: string
  created_at: string
  icp_filing: string
  public_security_filing: string
  bilibili_url: string
  gitee_url: string
  github_url: string
  name: string
  job: string
  address: string
  email: string
  qq_image: string
  wechat_image: string
}

export const getWebsite = () => {
  return xxRequest.get({
    url: '/config/website',
  })
}

export const updateWebsite = (data: Website) => {
  return xxRequest.patch({
    url: '/config/website',
    data: data,
  })
}

export interface System {
  use_multipoint: boolean
  sessions_secret: string
  oss_type: string
}

export const getSystem = () => {
  return xxRequest.get({
    url: '/config/system',
  })
}

export const updateSystem = (data: System) => {
  return xxRequest.patch({
    url: '/config/system',
    data: data,
  })
}

export interface Email {
  host: string
  port: number
  from: string
  nickname: string
  secret: string
  is_ssl: boolean
}

export const getEmail = () => {
  return xxRequest.get({
    url: '/config/email',
  })
}

export const updateEmail = (data: Email) => {
  return xxRequest.patch({
    url: '/config/email',
    data: data,
  })
}

export interface QQ {
  enable: boolean
  app_id: string
  app_key: string
  redirect_uri: string
}

export const getQQ = () => {
  return xxRequest.get({
    url: '/config/qq',
  })
}

export const updateQQ = (data: QQ) => {
  return xxRequest.patch({
    url: '/config/qq',
    data: data,
  })
}

export interface Qiniu {
  zone: string
  bucket: string
  img_path: string
  access_key: string
  secret_key: string
  use_https: boolean
  use_cdn_domains: boolean
}

export const getQiniu = () => {
  return xxRequest.get({
    url: '/config/qiniu',
  })
}

export const updateQiniu = (data: Qiniu) => {
  return xxRequest.patch({
    url: '/config/qiniu',
    data: data,
  })
}

export interface Jwt {
  access_token_secret: string
  refresh_token_secret: string
  access_token_expiry_time: string
  refresh_token_expiry_time: string
  issuer: string
}

export const getJwt = () => {
  return xxRequest.get({
    url: '/config/jwt',
  })
}

export const updateJwt = (data: Jwt) => {
  return xxRequest.patch({
    url: '/config/jwt',
    data: data,
  })
}

export interface Gaode {
  enable: boolean
  key: string
}

export const getGaode = () => {
  return xxRequest.get({
    url: '/config/gaode',
  })
}

export const updateGaode = (data: Gaode) => {
  return xxRequest.patch({
    url: '/config/gaode',
    data: data,
  })
}
