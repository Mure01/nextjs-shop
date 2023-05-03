import React from 'react'
import { AiFillCustomerService, AiFillQuestionCircle, AiFillStepBackward, AiOutlineDeliveredProcedure, AiOutlineLayout, AiOutlineQuestion, AiOutlineQuestionCircle, AiOutlineTrademark } from 'react-icons/ai'
import {CiDeliveryTruck} from 'react-icons/ci'

const Services = () => {
  return (
    <div className='flex space-y-3 items-end flex-wrap pb-10 justify-around'>
      <div className='flex flex-col w-[90%] md:w-[30%] box-border p-3 border-[1px] border-[#ddd] rounded-lg h-56 ' >
        <h1 className='text-center p-2 uppercase font-semibold text-xl flex items-center justify-center' >
          <AiOutlineQuestionCircle className='mr-3'/>
          Savjeti i pomoć</h1>
        <p className='p-3'>
        Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom ili nakon kupnje? 
        Pomoć možete zatražiti osobnim dolaskom u prodajne salone, putem telefona ili e-maila.
        </p>
      </div>
      <div className='flex flex-col w-[90%] md:w-[30%] box-border p-3 border-[1px] border-[#ddd] rounded-lg h-56  ' >
        <h1 className='text-center p-2 uppercase font-semibold text-xl flex items-center justify-center' >
        <CiDeliveryTruck className='mr-3 text-3xl'/>
        Dostava</h1>
        <p className='p-3'>
        Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom ili nakon kupnje? 
        Pomoć možete zatražiti osobnim dolaskom u prodajne salone, putem telefona ili e-maila.
        </p>
      </div>
      <div className='flex flex-col w-[90%] md:w-[30%] box-border p-3 border-[1px] border-[#ddd] rounded-lg h-56 ' >
        <h1 className='text-center p-2 uppercase font-semibold text-xl flex items-center justify-center' >
          <AiOutlineLayout className='mr-3'/>
         Montaža</h1>
        <p className='p-3'>
        Treba li vam savjet ili pomoć u bilo kojem trenutku, prije, tokom ili nakon kupnje? 
        Pomoć možete zatražiti osobnim dolaskom u prodajne salone, putem telefona ili e-maila.
        </p>
      </div>
    </div>
  )
}

export default Services
