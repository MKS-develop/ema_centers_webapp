import React from 'react'
import { Layout } from '../../components/Layout'
import { DatesProvider } from '../../lib/context/DatesProvider'
import Main from './Views/Main'

function Home() {

  return (
	  <Layout title={"Citas"} titleInPage={"Citas"} sidebarVisible={true}>
      <DatesProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto">
                <p className="title-page">Citas</p>
              </div>
              <div className="w-auto flex justify-end items-center gap-2">
                <div className="btn btn-secondary">Descargar excel</div>
                <div className="btn btn-secondary">Importar citas</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </DatesProvider>
    </Layout>
  )

}

export default Home