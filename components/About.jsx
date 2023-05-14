import React from 'react'
import { Newsletter, Services } from '.'
import Head from 'next/head'
import slika from '../public/logo.jpg'
import favicon from '../public/favicon.ico'
import pozadina from '../public/o_nama_pozadina.jpg'
import { AiFillEye, AiFillDropboxCircle } from 'react-icons/ai'
import Image from 'next/image'

const About = () => {

  const datum = new Date();
  const godina = datum.getFullYear();
  console.log(slika.src)
  return (
    <div>
      <Head>
              <title>O nama - Ideal namještaj</title>
              <link rel="icon" href={favicon} />
            </Head>
      <div className=' h-96 relative'>
        <Image
        src={pozadina}
        width = {100}
        height = {100}
        alt='pozadina o nama'
        unoptimized={true} 
        className='w-full h-full object-cover'
        />
        <h1 className='text-center md:text-3xl absolute bottom-32  lg:bottom-20 text-[#fff] font-medium w-full left-1/2 -translate-x-1/2'>2018 - O NAMA - {godina}</h1>
      </div>
      <div className=' h-80 items-center bg-background flex flex-wrap'>
        <div className=' w-full md:w-1/2 px-5 md:px-16 text-justify
         py-5 space-y-5'>
          <h1 className='text-center text-[#fff] text-2xl font-bold'> <span className=' text-org '>IDEAL</span> NAMJEŠTAJ</h1>

          <p className=' text-[#fff]'>
            IDEAL namještaj je firma za prodaju namještaja, osnovana 2018 godine sa sjedištem u Vitezu. 
            U počecima malo obiteljsko poduzeće, uz naporan rad napreduje i kroz svoj razvoj opredjeljuje se i 
            specijalizira prema prodaji kvalitetnog i funkcionalnog namještaja.
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <Image
          src={slika.src}
          width = {100}
          height = {100}
          alt='logo0'
          unoptimized={true} 
          className='px-10 w-11/12 h-fit m-auto md:w-80' 
/>
           </div>
      </div>


      <div className='h-fit flex flex-wrap my-5'>
        <div className=' w-full md:w-1/2 px-5 md:px-16 text-justify md:my-10
         py-5 space-y-5'>
          <h1 className='text-center text-2xl font-bold flex justify-center items-center gap-3'> <AiFillDropboxCircle/> NAŠA MISIJA</h1>

          <p className=''>
          Misija našeg salona namještaja je ta da zadovoljimo potrebe naših kupaca, uz kvalitetan i moderan namještaj, proizveden po međunarodnim standardima. Naš prioritet ste upravo Vi. 
          Želimo zadovoljiti i najzahtjevnije kupce i ponuditi Vam pristupačne cijene, jer nije svejedno gdje kupiti namještaj.
          </p>
        </div>
        <div className=' w-full md:w-1/2 px-5 md:px-16 text-justify md:my-5
         py-5 space-y-5'>
          <h1 className='text-center text-2xl font-bold flex justify-center items-center gap-3'> <AiFillEye/> NAŠA VIZIJA</h1>

          <p className=''>
          Vizija našeg salona je postati jedan od vodećih salona namještaja, jer želimo da Vam ponudimo vrhunsku kvalitetu,
           pouzdanost i profesionalnost našeg osoblja. Konstantno pratimo svjetska zbivanja i novosti vezana za dizajn interijera,
           kako bi Vama pružili veliki izbor modernog namještaja.
          </p>
        </div>
      </div>  


      <div className=' space-y-10'>
      <Newsletter/>
      <Services/>
      </div>
    </div>  
  )
}

export default About
