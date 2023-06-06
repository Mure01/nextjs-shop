import React, {useState} from 'react'
import { client } from '@/lib/client'
import { Product, Categories } from '@/components'
import Head from 'next/head'
import ReactPaginate from 'react-paginate'
import { Container } from '@chakra-ui/react'
const ProductsList = ({products}) => {
  const kind = products[0].productKind

  let itemsPerPage =8;
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
<>
    <Head> <title className=''>Ideal namjestaj - {kind}</title></Head>
    <Container className='flex-col md:flex-row flex '>
      <Categories productKind = {kind}/>
    <div className='w-full md:pl-14 pt-5 box-border flex flex-wrap gap-3 mb-5 justify-start'>

        {
          currentItems.map(item => (
            <Product key={item._id} product={item}/>
            ))
          }
          {
            products.length >= itemsPerPage &&
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
        }
          </div>
    </Container>
      </>      
  )
}

  /*dohvacanje elemenata za istu vrstu */

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        productKind
    }
    `;
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        productKind: product.productKind
    }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
export const getStaticProps = async ({ params: { productKind }}) => {

    const query = `*[_type == "product" && productKind == '${productKind}']`;
    const products = await client.fetch(query);
  
      return {
      props: { products }
    }
  }
  



export default ProductsList
