import React from 'react'
import { client } from '@/lib/client'
import AllProducts from '@/components/AllProducts'
const Allproducts = ({products}) => {
  return (
    <div>
      <AllProducts products={products}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  return {
    props: {products}
  }
}
export default Allproducts
