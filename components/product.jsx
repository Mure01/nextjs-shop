import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
const Product = ({product: {image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/products/product/${slug.current}`} >
        <div className='product-card'>
        <Image
          src={urlFor(image && image[0]).url()}
          alt="opis"
          className=' w-auto h-fit'
          unoptimized={true} 
          />
          <p className='product-name' >{name}</p>
          <p className='product-price' >${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
