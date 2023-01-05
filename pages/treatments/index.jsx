import React from 'react'
import { Layout } from '../../components/Layout'
import { TreatmentsProvider } from '../../lib/context/TreatmentsProvider'
import Main from './Views/Main'

function Home() {

  return (
	  <Layout title={"Reportes"} titleInPage={"Reportes"} sidebarVisible={true}>
      <TreatmentsProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto">
                <p className="title-page">Reportes</p>
              </div>
              <div className="w-auto flex justify-end items-center gap-2">
                <div className="btn btn-secondary">Exportar a excel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </TreatmentsProvider>
    </Layout>
  )

}

export default Home