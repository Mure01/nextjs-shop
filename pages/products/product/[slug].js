import React from 'react'
import { urlFor, client } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import Product from '@/components/product'
import { useState, useEffect } from 'react'
import Image from 'next/image'


const ProductDetails = ({product, products}) => {
  const {image, name, details, productKind, price, slug} = product
  const [index, setIndex] = useState(0)
  let brojac = 0
  products.map(product => (
    ( product.productKind === productKind && product.slug.current !== slug.current ? brojac+=1 : brojac
    )
    ))

  return (
    <div>
      
      <div className='space-y-4 w-full md:w-5/6 m-auto   md:flex md:p-10 md:space-x-10'>
      <div className='slug-photo md:mr-10'>
      <Image
       src={urlFor(image[index]).url()}
        alt='glavna slika' 
        width={300}
        height={300}
        className=' w-full h-fit md:h-[450px] md:w-fit pb-3'
        unoptimized={true} 
        />
      <div className='flex space-x-5 flex-wrap pl-3 justify-start space-y-4 items-baseline'>
        {
          image.map((img, i) => (
            <a onClick={() => setIndex(i)} key={i}>
              <Image
                alt='slika'
                src={urlFor(img).url()}
                height={70}
                width={70}
                className=' h-24 w-fit hover:cursor-pointer '
                unoptimized={true}
              />
            </a>
            ))
          }
          </div>
      </div>
      <div className='md:h-[420px] p-4 md:p-0 relative'>
      <h1 className=' text-3xl font-medium pb-3'>{name}</h1>
      <p>{details}</p>
      <div className='md:absolute bottom-0 right-0'>
      <h3 className='uppercase text-xl font-normal pt-8 pb-4'> CIJENa : {price? price +" KM": "Cijena na upit"}</h3>
      { price ? '' : <h4>Da biste saznali cijenu ovog proizvoda molimo Vas, pošaljite upit!</h4>}
      <button className=' bg-background text-[#fff] p-4 rounded-xl text'>
        POŠALJITE UPIT
      </button>
      </div>
      </div>
      </div>
       {brojac > 0 ?   <h1 className = ' text-center uppercase text-xl p-4 font-medium'>Slični proizvodi</h1> : ''}
      <div className ='w-full flex snap-mandatory justify-start overflow-scroll pl-12 md:justify-center no-scrollbar mb-7 space-y-7 lg:gap-5 items-baseline'>

    {
      brojac > 0 &&
      products.slice(0,6).map(product => (
        ( product.productKind === productKind && product.slug.current !== slug.current &&
            <Product product={product} key={product.slug.current}/> 
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
