import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
const Product = ({product: {image, name, slug, details, price} }) => {
  return (
    <div>
      <Link href={`/products/product/${slug.current}`} >
        <div className=' shadow-2xl p-2 bg-[#fff]'>
        <Image
          src={urlFor(image && image[0]).url()}
          alt="opis"
          width={300}
          height={300}
          className= ' h-80 w-fit'
          unoptimized={true} 
          />
          <p className=' uppercase text-center pt-2 pb-2 font-medium text-xl' >{name}</p>
          <p className=' w-56 mb-2 text-justify p-1 overflow-hidden whitespace-wrap line-clamp-2 text-ellipsis' >{details}</p>
          <p className='w-full bg-background p-2 text-center text-[#fff] uppercase'>Cijena: {price ?<> {price} KM</> : "Po dogovoru"}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
