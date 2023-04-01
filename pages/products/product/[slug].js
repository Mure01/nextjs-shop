import React from 'react'
import { urlFor, client } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Product from '@/components/product'
import { useState } from 'react'
import Image from 'next/image'


const ProductDetails = ({product, products}) => {
  const {image, name, details, productKind, price, slug} = product
  const [index, setIndex] = useState(0)
  return (
    <div>
      <div className='slug'>
      <div className='slug-photo'>
      <img
       src={urlFor(image[index])}
        alt='glavna slika' 
        width={300}
        height={300}/>
      <div className='slug-photos'>
        {
          image.map((img, i) => (
            <a onClick={() => setIndex(i)} key={i}>
              <img
                alt='slika'
                src={urlFor(img)}
                height={70}
                width={70}
              />
            </a>
            ))
          }
          </div>
      </div>
      <div>
      <h1>{name}</h1>
      <p>{details}</p>
      <h3>{price} KM</h3>
      </div>
      </div>
    <h1 className = 'similar-head'>Slicni proizvodi</h1>
    <div className ='product-kind-list'>

    {
      products.map(product => (
        ( product.productKind === productKind && product.slug.current !== slug.current &&
          <div  key={product.slug.current} >
            <Product product={product}/> 
          </div>
        )
        ))
      }
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }, 
      productKind
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current,
      },
    }));
    return {
      paths,
      fallback: 'blocking'
    }

  }
export const getStaticProps = async ({ params:{slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = `*[_type == "product"]`
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    
      return {
      props: { products, product }
    }
  }
  
export default ProductDetails
