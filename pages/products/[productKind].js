import React from 'react'
import { client } from '@/lib/client'
import Product from '@/components/product'

const ProductsList = ({products}) => {
    return (
    <div className='product-kind-list'>
        {
            products.map(item => (
                <Product key={item._id} product={item}/>
            ))
        }
    </div>
  )
}

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
