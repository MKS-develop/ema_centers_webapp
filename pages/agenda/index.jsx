import React from 'react'
import { Layout } from '../../components/Layout'

function Home() {
  return (
	<Layout title={"Agenda"} titleInPage={"Agenda"} sidebarVisible={true}>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto">
                <p className="title-page">Agenda</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
        </div>
    </Layout>
  )

}

export default Home