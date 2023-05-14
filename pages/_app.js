import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import '@/styles/globals.css'

import Layout from '@/components/Layout'
import StateContext from '@/context/StateContext'
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    )
}
