import React from 'react'
import logo from '../public/logo_header.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  const [menu, setMenu] = React.useState(false)
  const [dropDown, setDropDown] = React.useState(false)
  const [dropDownMd, setDropDownMd] = React.useState(false)
  return (
      <nav className= 'bg-background box-border flex relative items-center p-4 justify-between'> 
        <Image
          src={logo}
          width={70}
          height={70}
          className=' h-14 w-fit ml-10'
          alt='Ideal namjestaj'
        />
        <h1 className='text-[#fff] text-3xl mr-auto pl-2' >I<span className='text-orange'>DEAL</span></h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
       className={ menu ? 'hidden' : 'block' && "w-6 h-6 text-[#fff] md:hidden"} onClick={() => setMenu(!menu)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      <div className={menu ? 'block' : 'hidden'}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
      className="w-6 h-6 absolute right-5 text-[#fff] top-5 z-10" onClick={() => setMenu(!menu)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

        <ul className={  'text-[#fff] absolute w-full h-screen flex flex-col gap-5 justify-center uppercase bg-background opacity-90 top-0 pt-5 pb-5 text-center md:hidden left-0 '}>
          <Link href='/'>
            <li className={router.pathname == "/" ? "text-[#e8491d]" : ""}>Početna</li>
          </Link>


        <div className=' space-y-3'>
          <li onClick={() => setDropDown(!dropDown)} className={router.pathname == "/products/[productKind]" ? "text-[#e8491d] flex text-center justify-center" : "flex text-center justify-center"}> Proizvodi <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</li> 
          <div className={dropDown ? 'flex flex-col gap-2 w-fit ml-[50%] text-left translate-x-[-50%] ' : 'hidden'}>
            <Link href='/products/kuhinja'>
              <li className={router.pathname == "/products/kuhinja" ? "text-[#e8491d]" : ""}>- Kuhinje</li></Link>
            <Link href='/products/ormar' className={router.pathname == "/products/ormar" ? "text-[#e8491d]" : ""}><li>- Ormari</li></Link>
            <Link href='/products/predsoblje'><li className={router.pathname == "/products/predsoblja" ? "text-[#e8491d]" : ""}>- Predsoblja</li></Link>
          </div>
            </div>
          <Link href='/'>
            <li className={router.pathname == "/components/about" ? "text-[#e8491d]" : ""}>O nama</li>
          </Link>
          <Link href='/'>
            <li className={router.pathname == "/components/contact" ? "text-[#e8491d]" : ""}>Kontakt</li>
          </Link>
        </ul>
      </div>

        <ul className=' hidden text-[#fff] md:flex space-x-3 uppercase mr-12'>
          <Link href='/'>
            <li className={router.pathname == "/" ? "text-[#e8491d]" : ""}>Početna</li>
          </Link>
          <div className='flex relative justify-end'>
            <li onClick={() => setDropDownMd(!dropDownMd)} className={router.pathname == "/products/[productKind]" ? "text-[#e8491d] hover:cursor-pointer flex" : "hover:cursor-pointer flex"}>Proizvodi <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg></li>
          <div className={dropDownMd ? 'flex flex-col gap-2 absolute bg-background p-4 top-12 w-max' : 'hidden'}>
            <Link href='/products/kuhinja'><li className={router.pathname == "/products/kuhinja" ? "text-[#e8491d]" : ""}>- Kuhinje</li></Link>
            <Link href='/products/ormar'><li className={router.pathname == "/products/ormar" ? "text-[#e8491d]" : ""}>- Ormari</li></Link>
            <Link href='/products/predsoblje'><li className={router.pathname == "/products/predsoblje" ? "text-[#e8491d]" : ""}>- Predsoblja</li></Link>
          </div>
          </div>
          <Link href='/'>
            <li className={router.pathname == "/components/about" ? "text-[#e8491d]" : ""}>O nama</li>
          </Link>
          <Link href='/'>
            <li className={router.pathname == "/components/contact" ? "text-[#e8491d]" : ""}>Kontakt</li>
          </Link>
        </ul>
      </nav>

    )
}

export default Navbar
