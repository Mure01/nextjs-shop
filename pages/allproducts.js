import React, {useState} from 'react'
import { client } from '@/lib/client'
import AllProducts from '@/components/AllProducts'
import ReactPaginate from 'react-paginate'
import { styled } from '@chakra-ui/react'
const Allproducts = ({products}) => {


  let itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  return (
    <div className='w-full flex items-start'>
      <div className=' w-full flex flex-col  justify-center '>
      <AllProducts products={currentItems}/>
      <ReactPaginate
      className='flex space-x-5 mb-5 w-full items-center text-center justify-center '
      breakLabel="..."
      nextLabel=">>"
      onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        pageLinkClassName='p-2'
        activeClassName='bg-[lightblue] p-1 rounded '
/>
        </div>


    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  return {
    props: {products}
  }
}
export default Allproducts
