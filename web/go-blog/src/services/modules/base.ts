import xxRequest from '../index'

export interface CaptchaResponse {
  captcha_id: string
  pic_path: string
}

export const captcha = () => {
  return xxRequest.post({
    url: '/base/captcha',
  })
}

export interface EmailRequest {
  email: string
  captcha: string
  captcha_id: string
}

export const sendEmialVerificationCode = (data: EmailRequest) => {
  return xxRequest.post({
    url: '/base/sendEmailVerificationCode',
    data: data,
  })
}

export const qqLoginURL = () => {
  return xxRequest.get({
    url: '/base/captcha',
  })
}
