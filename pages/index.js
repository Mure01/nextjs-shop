import React from 'react'
import { client } from '@/lib/client'
import Head from 'next/head'
import { Banner, Newsletter, Recomended, Startpage, Services } from '@/components'
const Home = ({products}) => {
return (
<>
    <Head>
      <title>Ideal namještaj</title>
    </Head>
    <Banner/>   
    <Newsletter/>
    <Startpage>
      <Recomended products={products}/>
    </Startpage>
     <Services/>
  </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  return {
    props: {products}
  }
}
export default Home
