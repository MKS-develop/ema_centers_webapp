import React from 'react'
import { Layout } from '../components/Layout'
import { HomeProvider } from '../lib/context/HomeProvider'
import Main from './Views/Main'

function Home() {

  return (
	  <Layout title={"Dashboard"} titleInPage={"Dashboard"} sidebarVisible={true}>
      <HomeProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto">
                <p className="title-page">Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </HomeProvider>
    </Layout>
  )

}

export default Home
