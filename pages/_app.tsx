import type { AppProps } from 'next/app'
import Head from 'next/head'
import Default from '@/layouts/Default'

import '@/components/components.scss'
import '@/layouts/layouts.scss'
import '@/css/global.scss'
import './pages.scss'

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
