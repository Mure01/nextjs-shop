import React from 'react'
import { client } from '@/lib/client'
import { Product } from '@/components'
import Head from 'next/head'

const ProductsList = ({products}) => {
  console.log(products)  
  const kind = products[0].productKind
  return (
      
    <div className=' justify-center w-full box-border p-5 flex flex-wrap gap-7 lg:justify-start'>
      <Head> <title className=''>Ideal namjestaj - {kind}</title></Head>
        {
            products.map(item => (
                <Product key={item._id} product={item}/>
            ))
        }
    </div>
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
