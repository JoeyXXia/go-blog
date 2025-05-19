import xxRequest from '../index'

export const websiteInfo = () => {
  return xxRequest.get({
    url: '/website/info',
  })
}

export const websiteCarousel = () => {
  return xxRequest.get({
    url: '/website/carousel',
  })
}

export interface WebsiteNewsRequest {
  source: string
}

export interface HotItem {
  index: number
  title: string
  description: string
  image: string
  popularity: string
  url: string
}

export interface HotSearchData {
  source: string
  update_time: string
  hot_list: HotItem[]
}

export const websiteNews = (data: WebsiteNewsRequest) => {
  return xxRequest.get({
    url: '/website/news',
    params: data,
  })
}

export interface WebsiteCalendarResponse {
  date: string
  lunar_date: string
  ganzhi: string
  zodiac: string
  day_of_year: string
  solar_term: string
  auspicious: string
  inauspicious: string
}

export const websiteCalendar = () => {
  return xxRequest.get({
    url: '/website/calendar',
  })
}

export interface FooterLink {
  title: string
  link: string
}

export const websiteFooterLink = () => {
  return xxRequest.get({
    url: '/website/footerLink',
  })
}

export interface WebsiteCarouselOperation {
  url: string
}

export const websiteAddCarousel = (data: WebsiteCarouselOperation) => {
  return xxRequest.post({
    url: '/website/addCarousel',
    data: data,
  })
}

export const websiteCancelCarousel = (data: WebsiteCarouselOperation) => {
  return xxRequest.patch({
    url: '/website/cancelCarousel',
    data: data,
  })
}

export const websiteCreateFooterLink = (data: FooterLink) => {
  return xxRequest.post({
    url: '/website/createFooterLink',
    data: data,
  })
}

export const websiteDeleteFooterLink = (data: FooterLink) => {
  return xxRequest.delete({
    url: '/website/deleteFooterLink',
    data: data,
  })
}
