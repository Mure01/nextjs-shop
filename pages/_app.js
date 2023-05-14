import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import StateContext from '@/context/StateContext'
import Head from "next/head";
import fav from '../public/logo.jpg'
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Head>
        <link rel="icon" type="image/jpg" href={fav}/>
        <title>Ideal namještaj</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    )
}
