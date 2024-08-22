import React from 'react'
import Menu from '../menu/Menu'
import Footer from '../footer/Footer'
import{Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Menu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
