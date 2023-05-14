import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import StateContext from '@/context/StateContext'
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Head>
        <title>Ideal namještaj</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    )
}
