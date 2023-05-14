import React from 'react'
import { Product } from '.'
const AllProducts = ({products}) => {
    console.log("produkti" + products)
  return (
    <div className='flex flex-wrap gap-5 justify-evenly my-10'>
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
    </div>
  )
}

export default AllProducts
