import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'
import Headers from './Headers/Headers'
import Footers from './Footers/Footers'
export default function App({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Head>
    <title>Next.js blog site</title>
    <meta name="description" content="next.js blog site" />
    </Head>
    <Headers/>
      <Component {...pageProps} />
      <Footers/>
     </Fragment>
}
