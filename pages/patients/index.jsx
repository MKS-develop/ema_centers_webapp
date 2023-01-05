import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { PatientsProvider } from '../../lib/context/PatientsProvider'
import Main from './Views/Main'

function Index() {
  return(
    <Layout title={"Pacientes"} titleInPage={"Pacientes"} sidebarVisible={true}>
      <PatientsProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto">
                <p className="title-page">Pacientes</p>
              </div>
              <div className="w-auto flex justify-end items-center gap-2">
                <Link href="/patients/new-patient" className="btn btn-primary">Nuevo paciente</Link>
                <div className="btn btn-secondary">Descargar excel</div>
                <div className="btn btn-secondary">Importar citas</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </PatientsProvider>
    </Layout>
  )
}

export default Index