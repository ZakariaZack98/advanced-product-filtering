import React from 'react'
import Navbar from './common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

const CommonLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default CommonLayout
