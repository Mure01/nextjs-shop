import React from 'react'
import { client } from '@/lib/client'

import { Product } from '@/components'

const Home = ({products, kuhinje}) => {
  return (
<>
    <div className = 'product-list'>
      {
        products.map(product => (
          <Product key={product._id} product={product}/>
            ))
        }
    </div>
  </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const queryKuhinje = '*[_type== "product" && productKind == "kuhinja"] '
  const kuhinje = await client.fetch(queryKuhinje)
  return {
    props: {products, kuhinje}
  }
}

export default Home
