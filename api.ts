import qs from 'qs'
import type { Bangumi } from '@/interface'

export function get<T = any> (url: string, params?: unknown): Promise<T> {
  let query = ''
  if (params) {
    query = '?' + qs.stringify(params)
  }
  return fetch(url + query).then(res => res.json())
}

export default {
  getBangumi () {
    return get<{ items: Bangumi[] }>('https://cdn.jsdelivr.net/npm/bangumi-data/dist/data.json')
  }
}
