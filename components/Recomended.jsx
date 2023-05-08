import React from 'react'
import Product from './Product'
const Recomended = ({products}) => {
  return (
    <div>
      <div className=' mb-10'>
        <h1 className='w-full uppercase text-3xl text-center pt-6 pb-6 ls' >Preporučeni proizvodi</h1>
    <div className = ' flex flex-nowrap relative no-scrollbar w-11/12 scroll-ml-3 overflow-x-scroll md:w-3/4 m-auto gap-5'>
      <div className = 'animate-marquee  flex md:space-x-10'  >

      {
        products.slice(0,8).map(product => (
          <Product className=' ml-9' key={product._id} product={product}/>
          ))
        }
        </div>
        <div  className=' animate-marquee flex md:space-x-10 '>
      {
          products.slice(0,8).map(product => (
            <Product key={product._id} product={product}/>
          ))
      }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Recomended
