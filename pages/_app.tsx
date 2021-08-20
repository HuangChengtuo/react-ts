import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import Default from '@/layouts/Default'

import '@/layouts/default.scss'
import '@/components/nav.scss'
import './global.scss'
import './hex.scss'
import './index.scss'
import './swiper.scss'
import './unixTime.scss'

export default function App ({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>黄秤砣的工具箱</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="stylesheet" href="https://s1.huangchengtuo.com/css/antd.min.css" />
    </Head>
    <Default>
      <Component {...pageProps} />
    </Default>
  </>
}
