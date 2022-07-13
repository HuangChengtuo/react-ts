import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://s1.huangchengtuo.com/css/antd.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}