import React from 'react'
import { urlFor, client } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { Product, Categories } from '@/components'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Buyform from './buyform'
import Head from 'next/head'


const ProductDetails = ({product, products}) => {
  const {image, name, details, productKind, price, slug} = product
  const [index, setIndex] = useState(0)
  let brojac = 0

  products.map(product => (
    ( product.productKind === productKind && product.slug.current !== slug.current ? brojac+=1 : brojac)
    ))
  
  const [form, setForm] = useState(false) 
  
  return (
    <div>
      <Head><title className='uppercase'>{name} - Ideal namještaj</title></Head>

    <div className='flex'>
    <div className='hidden md:block'>

      <Categories />
    </div>

      <div className=' w-full md:w-[100%] mr-auto ml-auto md:pt-10 md:flex md:space-x-10'>
       <div className='w-fit'>
       </div>
        <div className=' hidden md:block'>
      {form && <Buyform/>}
        </div>
      {
        !form && 
        
        <div className='slug-photo m-0 flex flex-col md:items-center md:w-2/5 '>
      <Image
       src={urlFor(image[index]).url()}
       alt='glavna slika' 
       width={300}
       height={300}
       className=' w-full h-fit md:h-[450px] md:w-fit  pb-3'
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
}


      <div className='md:h-[620px] p-5 pb-0 md:w-3/5 md:border-l md:pl-10 pt-0  text-justify  md:pr-0 lg:pr-12 relative'>
      
      <h1 className=' text-3xl font-medium mt-5 pb-3'>{name} </h1>
      <p className='pb-6'>{details}</p>
      <div className='flex flex-wrap'>

      <p className='pb-2'>MATERIJALI ZA IZRADU: </p>
          <ul className=' list-disc pl-10'>
            <li>Iverica</li>
            <li>Medijapan</li>
            <li>Puno drvo</li>
          </ul>
      </div>

      <p className='flex items-center space-x-2 my-3'>
        <span>BOJE: </span>
        <span className='dot bg-[#000]'></span>
        <span className='dot bg-[#ddd]'></span>
        <span className='dot bg-[#5f9]'></span>
         </p>

      <div className='md:absolute md:pr-14 bottom-0 flex flex-col space-y-5 left-0 md:pl-10 '>
      <h3 className='uppercase text-xl font-normal  '> CIJENa : {price? price +" KM": "Cijena na upit"}</h3>
      { price ? <h4>Da biste naručili ili saznali detalje o proizvodu molimo Vas, pošaljite upit!</h4> :
       <h4 className=''>Da biste naručili ili saznali cijenu ovog proizvoda molimo Vas, pošaljite upit!</h4>}
      <button
      onClick={() => setForm(!form)}
      className=' bg-background text-[#fff] p-4 md:w-44 text-center rounded-xl text'>
        {form ?  "PONIŠTITE NARUDŽBU" : "POŠALJITE UPIT" }
      </button>
      </div>
      </div>
      </div>
  </div>
      <div className=' block md:hidden'>
      <Categories/>
       </div>
{form && <Buyform/>}
       {brojac > 0 ?   <h1 className = ' text-center uppercase text-xl md:text-2xl pt-5 pb-2 '>Slični proizvodi</h1> : ''}
      <div onClick={() => setForm(false)} className ='w-full flex snap-mandatory justify-start overflow-scroll pl-12 pr-12 gap-5 md:justify-center no-scrollbar mb-7 space-y-7 lg:gap-5 items-baseline'>
    {
      brojac > 0 &&
      products.map(product => (
        ( product.productKind === productKind && product.slug.current !== slug.current &&
          <Product product={product}  key={product.slug.current}/> 
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
