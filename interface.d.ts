import dayjs from 'dayjs'

declare global {
  interface Window {
    dayjs: typeof dayjs
  }
}

export interface Bangumi {
  begin: string,
  end: string,
  title: string
}
