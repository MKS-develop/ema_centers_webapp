import Head from 'next/head'
import React from 'react'

export const Layout = ({title, children}) => {
  return (
    <div className='bg-white h-fit'>
        <Head>
            <title>{`${title} - EMA Provedores`}</title>
        </Head>
        {children}
    </div>
  )
}
