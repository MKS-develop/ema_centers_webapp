import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export const Layout = ({title = "", children, titleInPage = "", sidebarVisible = false}) => {
  return (
    <div className='bg-white h-fit'>
        <Head>
          <title>{`${title} - EMA Proveedores`}</title>
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        <div className="flex">
          {sidebarVisible && <Sidebar/>}
          <div className={`relative ${sidebarVisible ? "w-10/12 block relative ml-[16.666667%]" : "w-full"}`}>
            {sidebarVisible && <Navbar/>}
            {children}
          </div>
        </div>
    </div>
  )
}
