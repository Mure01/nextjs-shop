import React from 'react'
import { client } from '@/lib/client'
import { Product, Categories } from '@/components'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
const ProductsList = ({products}) => {
  const kind = products[0].productKind
  return (
<>
    <Head> <title className=''>Ideal namjestaj - {kind}</title></Head>
    <Container className='flex-col md:flex-row flex '>
      <Categories productKind = {kind}/>
    <div className=' justify-center w-full md:pl-14 pt-5 box-border flex flex-wrap gap-7 lg:justify-start'>

        {
          products.map(item => (
            <Product key={item._id} product={item}/>
            ))
          }
          </div>
    </Container>
      </>      
  )
}

  /*dohvacanje elemenata za istu vrstu */

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        productKind
    }
    `;
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        productKind: product.productKind
    }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
export const getStaticProps = async ({ params: { productKind }}) => {

    const query = `*[_type == "product" && productKind == '${productKind}']`;
    const products = await client.fetch(query);
  
      return {
      props: { products }
    }
  }
  



export default ProductsList
