import React from 'react'
import { Product, Categories } from '.'
import { Container } from '@chakra-ui/react'
const AllProducts = ({products}) => {
  return (
    <>
    <Container className='flex-col md:flex-row flex '>
    <Categories/>
    <div>

      <h1 className=' hidden md:block uppercase font-medium text-2xl w-full sticky top-0 pl-14 py-5 bg-[#ddd]'>Svi proizvodi</h1>
      <div className='my-10 flex w-full items-center md:pl-14 justify-around flex-wrap'>
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
        </div>
        </Container>
        </>
  )
}

export default AllProducts
