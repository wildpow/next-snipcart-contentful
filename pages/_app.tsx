import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
<>
  <Head>
  <link rel="preconnect" href="https://app.snipcart.com"/>
<link rel="preconnect" href="https://cdn.snipcart.com"/>
  </Head>
  <Component {...pageProps} />
    </>
  )
}
export default MyApp
