import React from 'react'
import { Layout } from '../components/Layout'
import { HomeProvider } from '../lib/context/HomeProvider'
import Main from './Views/Main'

function Home() {

  return (
	  <Layout title={"Dashboard"}>
      <HomeProvider>
        <Main/>
      </HomeProvider>
    </Layout>
  )

}

export default Home
