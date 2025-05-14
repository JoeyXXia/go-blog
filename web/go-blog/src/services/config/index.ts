let BASE_URL = ''

if (import.meta.env.PROD) {
  BASE_URL = 'production'
} else {
  BASE_URL = 'development'
}

export const TIME_OUT = 10000
export { BASE_URL }
