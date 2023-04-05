import React from 'react'
import { client } from '@/lib/client'
import Product from '@/components/product'
import Router from 'next/router'
const Home = ({products, kuhinje}) => {
 const router = Router.useRouter()
const [hoveredTrack, setHoveredTrack] = React.useState(true)

return (
<>
    <div className=' font-bold text-6xl text-center h-96 pt-24'>
      <h1>BANNER </h1>
    </div>

    <div className='w-full p-5 bg-background mt-12 flex flex-wrap justify-center md:justify-between items-center md:pl-12 md:pr-32'>
      <h1 className='text-[#fff] text-2xl text-center md:text-justify mb-4 '>Kontaktirajte nas za mjere i ponudu već danas!</h1>
      <button type="button" onClick={() => router.push('mailto:idealbih387@gmail.com?subject=Potražnja ponude')}
      className=' bg-[#e8491d] h-fit p-4 rounded-lg uppercase font-normal'>Zatražite ponudu</button>
    </div>

    <div className=' flex w-full flex-wrap justify-center'>
      <h1 className='md:w-2/5 text-center text-4xl font-medium pt-10 md:pt-20 flex flex-wrap justify-center leading-relaxed'>IDEALAN NAMJEŠTAJ ZA <br className=' hidden md:block'></br>VAŠ DOM</h1>
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

      <div className='flex flex-wrap bg-background text-[#fff] pt-5'>
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
  </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const queryKuhinje = '*[_type== "product" && productKind == "kuhinja"] '
  const kuhinje = await client.fetch(queryKuhinje)
  return {
    props: {products, kuhinje}
  }
}

export default Home
