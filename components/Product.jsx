import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import { useRouter } from 'next/router'

const Product = ({product: {image, name, slug, details, price} }) => {
  const router =  useRouter();
  return (
  <div className= {router.pathname == "/allproducts" || router.pathname == "/products/[productKind]" ? ' w-[48%] flex flex-col items-center md:w-fit' : ' flex flex-col items-center w-fit' }    >
  <Link href={`/products/product/${slug.current}`} >
        <div className=' shadow-2xl p-2 bg-[#fff]'>
        <Image
          src={urlFor(image && image[0]).url()}
          alt="opis"
          width={300}
          height={300}
          className=  {router.pathname == "/allproducts" || router.pathname == "/products/[productKind]" ? ' h-52 w-full md:h-80 md:w-72  ' : ' h-80 w-fit' } 
          unoptimized={true} 
          />
          <p className=' uppercase text-center pt-2 pb-2 font-medium text-xl' >{name}</p>
          <p 
          className={router.pathname == "/allproducts" || router.pathname == "/products/[productKind]" ? ' md:w-56 mb-2 text-justify p-1 overflow-hidden whitespace-wrap line-clamp-2 text-ellipsis':
          'w-56 mb-2 text-justify p-1 overflow-hidden whitespace-wrap line-clamp-2 text-ellipsis'}
          >  {details}</p>
          {
          //Cijena:<br></br> {price ?<> {price} KM</> : "Po dogovoru"}
          }
          <p className='w-full bg-background p-2 text-center text-[#fff] uppercase'>Detaljnjije</p>
          </div>
          </Link>
          </div>
          )
        }
        
        export default Product
        