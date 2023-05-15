import React from 'react'
import logo from '../public/logo_header.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillClockCircle, AiFillCopy, AiFillFacebook, AiFillInstagram, AiFillSchedule, AiFillSecurityScan } from 'react-icons/ai'


const Footer = () => {

  const copyright = String.fromCodePoint(0x00A9);
  const datum = new Date();
  const godina = datum.getFullYear();

  return (
    <div>
  <div className=' p-5 w-full flex pl-10 md:pl-0 space-y-5 items-start flex-col-reverse md:flex-row md:flex-wrap md:justify-around bg-background text-[#fff]'>
    <div className=''>
        <Image
          src={logo}
          width={200}
          height={200}
          className='w-fit h-24 mt-10 md:mt-0'
          alt='logo'
        />
      </div>
{/*drustvene mreze pracenje */}
      <div className='space-y-2'>
        <h2 className=' text-2xl'>Pratite nas: </h2>
        <ul className='pl-6'>
        <Link href={'https://www.facebook.com/ideal.bih'} target='blank'>
          <li className='flex items-center text-xl'> <AiFillFacebook className='mr-2'/> Ideal namještaj </li>
        </Link>
        <Link href={'https://www.instagram.com/ideal.bih'} target='blank'>
          <li className='flex items-center text-xl'> <AiFillInstagram className='mr-2'/> ideal.bih </li>
        </Link>
        </ul>
      </div>

{/*radno vrijeme */}

      <div className='space-y-2'>
      <h2 className=' text-2xl'>Radno vrijeme: </h2>
        <ul className='pl-6 text-lg'>
          <li> Ponedjeljak - Petak : 7:00 - 17:00 </li>
          <li> Subota : 7:00 - 15:00 </li>
          <li> Nedjelja : neradni dan </li>
        </ul>
      </div>
    </div>
      <h4 className=' text-center p-3 bg-background text-[#fff] border-t-[1px] '>Sva prava zadržana {copyright}, Ideal namještaj { godina }</h4>

    </div>
  )
}

export default Footer
