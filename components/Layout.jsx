import React from 'react'
import Navbar from './Navbar'
import { Footer } from '.'
const Layout = ( {children} ) => {
  return (
    <div>
      <header>
    <Navbar/>
      </header>
      <main> {children} </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
