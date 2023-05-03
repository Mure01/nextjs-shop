import React from 'react'
import Product from './Product'
import Image from 'next/image'
import Link from 'next/link'
import ponuda from '../public/ponuda.jpg'

const Startpage = ({products, children}) => {
  return (
    <div>

    <div className=' flex w-full flex-wrap justify-center md:h-[45vh] items-center'>
      <h1 className='md:w-2/5 text-center text-4xl font-medium pt-10 md:pt-0 flex flex-wrap justify-center leading-relaxed'>IDEALAN NAMJEŠTAJ ZA <br className=' hidden md:block'></br>VAŠ DOM</h1>
      <div className='md:w-3/5 text-justify p-5 md:p-10 text-xl'>
        <p className=' md:w-4/5 md:pl-10 m-auto'>Uz kuhinje modernog dizajna i visoke kvalitete, opremamo apartmane i montiramo namještaj za poslovne prostore,
           dječje i spavaće sobe.
        </p>
        <p className='md:w-4/5 pt-6 md:pl-10 m-auto'>
        Također možemo Vam ponuditi ugradnju ugradbenih ormara, kliznih vrata i kliznih stijena, 
        te montaže iskoristivih podnih konstrukcija koje su idealna rješenja za visoke i vrlo visoke stanove,
        prema rješenjima vašeg ili našeg dizajnera.</p>
      </div>
    </div>


    {children}
    
    
    <div className='flex flex-wrap bg-background text-[#fff] pt-10 pb-10'>
        <h1 className=' text-3xl uppercase font-normal w-full text-center'>Kompletno opremanje</h1>
        <div className='p-5 md:p-10 text-justify md:w-1/2'>
          <p className='md:w-3/4 m-auto li leading-8'>
          Opremanje enterijera zahtjeva stučnosti, inspiraciju i slobodu kreativnosti.
          Trendovi budućnosti diktiraju spoj struke i individualno-kreativnih ideja.
          <br></br>
          <br className='hidden md:block'></br>
          Nesumnjivo prateći savremene trendove iDEAL nudi platformu zajedničke kreativnosti i stvaranja u vašem domu.
          Spojem dizajnerske stručnosti i vaših ličnih kreacija nastaju umjetnička djela u obliku modernog namještaja za vaš dom.
          </p>
        </div>
        <div className='p-5 md:p-10 text-justify md:w-1/2'>
          <h2 className='font-medium text-xl mb-4'>Pogodnosti kompletnog opremanja</h2>
          <ul className=' list-disc pl-6 md:pl-10 space-y-2'>
            <li>Svi modeli namještaja su po mjeri</li>
            <li>Sručno savjetovanje o opremanju</li>
            <li>3D idejna rješenja svih vaših želja</li>
            <li>Najkvalitetniji materijali za izradu namještaja</li>
            <li>Autentičan dizajn i stil</li>
            <li>Bogat izbor dekora</li>
            <li>Izbor materijala za izradu pločastog namještaja (iveral, lakirani medijapan)</li>
            <li>Brza isporuka</li>
          </ul>
        </div>
      </div>


    <div className='flex flex-wrap justify-around pt-10 pb-10'>
        <h1 className=' text-3xl uppercase font-normal w-full text-center'>idealna kupovina</h1>
        <div className='p-5 md:p-10 text-justify flex items-end space-y-10 flex-col md:w-1/2 relative'>
          <div>
          <p>
            U službi povjerenja naših vjernih kupaca, koje nas čini jednim od lidera u proizvodnji i prodaji 
            namještaja po mjeri, od sada potpuno nova iDEAL-na usluga online kupovine iz udobnosti vašeg doma.
          </p>
          <p>
            Na našoj web stranici kupci imaju mogućnost kupovine i konfiguracije namještaja po želji iz iDEAL izuzetno bogate ponude.
          </p>
          </div>
          <Link href={'#'} className=' w-fit bg-org p-3 rounded-lg mt-20 text-[#fff]'>
            POGLEDAJTE PONUDU
          </Link>

        </div>
        <div className='p-5 md:p-10 flex justify-center md:justify-around text-justify md:w-1/2'>
          <Image
            src={ponuda}
            height = {200}
            width = {200}
            alt='ponuda'
            className=' w-full h-fit md:w-fit'
          />
        </div>
      </div>
    </div>
  )
}

export default Startpage
