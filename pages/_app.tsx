import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/layouts'
import { Provider } from 'react-redux'
import store from '../store'

import '@/components/components.scss'
import '@/layouts/layouts.scss'
import '@/css/global.scss'
import '@/css/pages/pages.scss'

export default function App ({ Component, pageProps, router }: AppProps) {
  return <>
    <Head>
      <title>黄秤砣的工具箱</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Provider store={store}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
}
