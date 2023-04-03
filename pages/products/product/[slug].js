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
      <div className=' p-4 space-y-4  md:flex md:p-10 md:space-x-10'>
      <div className='slug-photo'>
      <Image
       src={urlFor(image[index]).url()}
        alt='glavna slika' 
        width={300}
        height={300}
        className=' w-70 h-fit'
        unoptimized={true} 
        />
      <div className='flex space-x-5 pt-5 flex-wrap justify-start space-y-4 items-baseline'>
        {
          image.map((img, i) => (
            <a onClick={() => setIndex(i)} key={i}>
              <Image
                alt='slika'
                src={urlFor(img).url()}
                height={70}
                width={70}
                className=' h-20 w-fit hover:cursor-pointer '
                unoptimized={true}
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
        <h1 className = ' text-center uppercase text-lg p-4'>Slični proizvodi</h1>
        <div className ='w-full flex flex-wrap justify-center space-y-7 lg:gap-5 items-baseline'>
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
