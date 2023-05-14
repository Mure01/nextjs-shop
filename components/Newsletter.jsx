import React from 'react'
import Router from 'next/router'
import react from '@heroicons/react';
const Newsletter = () => {
  const router = Router.useRouter();
  return (
    <div>
      <div className='w-full p-5 bg-background mt-0 flex flex-wrap justify-center md:justify-between items-center md:pl-12 md:pr-32'>
      <h1 className='text-[#fff] text-2xl text-center md:text-justify mb-4 '>Kontaktirajte nas za mjere i ponudu već danas!</h1>
      <button type="button" onClick={() => router.push('mailto:idealbih387@gmail.com?subject=Potražnja ponude')}
      className=' bg-[#e8491d] h-fit p-4 rounded-lg uppercase font-normal text-[#fff]'>Zatražite ponudu</button>
    </div>

    </div>
  )
}


export default Newsletter
