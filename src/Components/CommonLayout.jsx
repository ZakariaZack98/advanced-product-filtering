import React from 'react'
import Navbar from './common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './common/Footer'

const CommonLayout = () => {
  return (
    <>
      <Navbar/>
        <div className="w-[95%] mx-auto">
          <Outlet/>
        </div>
      <Footer/>
    </>
  )
}

export default CommonLayout
