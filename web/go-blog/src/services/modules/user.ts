import xxRequest from '../index'
import type { Model, PageInfo } from '@/services/types/common'
export interface User extends Model {
  uuid: string
  username: string
  email: string
  openid: string
  avatar: string
  address: string
  signature: string
  role_id: number
  register: string
  freeze: boolean
}

export interface RegisterRequest {
  username: string
  password: string
  email: string
  verification_code: string
}

export const register = (data: RegisterRequest) => {
  return xxRequest.post({
    url: '/user/register',
    data: data,
  })
}

export interface LoginRequest {
  email: string
  password: string
  captcha: string
  captcha_id: string
}

export interface LoginResponse {
  user: User
  access_token: string
  access_token_expires_at: number
}

export const login = (data: LoginRequest) => {
  return xxRequest.post({
    url: '/user/login',
    data: data,
  })
}

export interface ForgotPasswordRequest {
  email: string
  verification_code: string
  new_password: string
}

export const forgotPassword = (data: ForgotPasswordRequest) => {
  return xxRequest.post({
    url: '/user/forgotPassword',
    data: data,
  })
}

export interface UserCardRequest {
  uuid: string
}

export interface UserCardResponse {
  uuid: string
  username: string
  avatar: string
  address: string
  signature: string
}

export const userCard = (data: UserCardRequest) => {
  return xxRequest.get({
    url: '/user/card',
    params: data,
  })
}

export const logout = () => {
  return xxRequest.post({
    url: '/user/logout',
  })
}

export interface UserResetPasswordRequest {
  password: string
  new_password: string
}

export const userResetPassword = (data: UserResetPasswordRequest) => {
  return xxRequest.patch({
    url: '/user/resetPassword',
    data: data,
  })
}

export const userInfo = () => {
  return xxRequest.get({
    url: '/user/info',
  })
}

export interface UserChangeInfoRequest {
  username: string
  address: string
  signature: string
}

export const userChangeInfo = (data: UserChangeInfoRequest) => {
  return xxRequest.patch({
    url: '/user/changeInfo',
    data: data,
  })
}

export const userWeather = () => {
  return xxRequest.get({
    url: '/user/weather',
  })
}

export interface UserChartRequest {
  date: number
}

export interface UserChartResponse {
  date_list: string[]
  login_data: number[]
  register_data: number[]
}

export const userChart = (data: UserChartRequest) => {
  return xxRequest.get({
    url: '/user/chart',
    params: data,
  })
}

export interface UserListRequest extends PageInfo {
  uuid: string | null
  register: string | null
}

export const userList = (data: UserListRequest) => {
  return xxRequest.get({
    url: '/user/list',
    params: data,
  })
}

export interface UserOperation {
  id: number
}

export const userFreeze = (data: UserOperation) => {
  return xxRequest.patch({
    url: '/user/freeze',
    data: data,
  })
}

export const userUnfreeze = (data: UserOperation) => {
  return xxRequest.patch({
    url: '/user/unfreeze',
    data: data,
  })
}

export interface UserLoginListRequest extends PageInfo {
  uuid: string | null
}

export interface Login extends Model {
  user_id: string
  user: User
  login_method: string
  ip: string
  address: string
  os: string
  device_info: string
  browser_info: string
  status: string
}

export const userLoginList = (data: UserLoginListRequest) => {
  return xxRequest.get({
    url: '/user/loginList',
    params: data,
  })
}
