import { Container } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
const productKinds = [
    {
      name: 'Kuhinje',
      link: 'kuhinja',
    },
    {
      name: 'Ormari',
      link: 'ormar',
    },
    {
      name: 'Predsoblja',
      link: 'predsoblje',
    },
    {
      name: 'Komode',
      link: 'komode',
    },
    {
      name: 'Ugaone garniture',
      link: 'ugaonegarniture',
    },
    {
      name: 'Kreveti',
      link: 'kreveti',
    },
    {
      name: 'Stolovi',
      link: 'stol',
    },
    {
        name: 'Kupatilski namještaj',
        link: 'kupatilskinamještaj',
    }
  ]
  
  
  const Categories = ({productKind}) => {
  
    const router = useRouter()
    const [showCategory, setShowCategory] = useState(false);
  
    return (
    <>
    {/* mobitel kategorije dropdown... */}
    <Container className='block md:hidden h-fit py-5 w-[90%] m-auto rounded-2xl mt-5   space-y-5 flex-col px-7 bg-org text-[#fff] '>
    <div className=' space-y-3 text-center flex flex-col justify-center'>
        <li onClick={() => setShowCategory(!showCategory)} className="flex items-center uppercase justify-centerflex text-center justify-center"> Kategorije 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
      </li> 

          <div className={showCategory ? 'flex flex-col gap-2  z-100 text-left ml-[25%]' : 'hidden'}>
          <li className={router.pathname == '/allproducts' ? 'text-background font-medium': ''}>
        <Link href="/allproducts" >
          Svi proizvodi
                </Link>
      </li>
          {
            productKinds.map((product)=> {
              return (
                <Link href={`/products/${product.link}`} key={product.name}>
                  <li className={product.link == productKind ? 'text-org': ''}> {product.name}</li>
                </Link>
              )
            })
           }
               </div>
            </div>
        </Container>

    {/* md uredjaji kategorije lista */}

    <Container className='hidden md:flex h-[100vh] sticky top-0  space-y-5 flex-col w-fit px-7 bg-[#ddd] '>
    <h1 className=' uppercase my-10 font-medium text-2xl '><span className='text-org'>Ideal</span> namještaj</h1>
    <h2 className=' uppercase  font-medium text-xl '>Kategorije</h2>
    <ul className=' space-y-4 text-lg '>
      <li className={router.pathname == '/allproducts' ? 'text-org font-medium': ''}>
        <Link href="/allproducts" >
          Svi proizvodi
                </Link>
      </li>
        {productKinds.map((item, index) => (
            <li key={index} className={item.link == productKind ? 'text-org font-medium': ''}>
            <Link href={`/products/${item.link}`}>{item.name}</Link>
          </li>
        ))}
    </ul>
        </Container>
    </>
  )
}

export default Categories
