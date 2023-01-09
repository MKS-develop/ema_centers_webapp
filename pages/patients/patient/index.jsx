import React from 'react'
import Link from 'next/link'
import { Layout } from '../../../components/Layout'
import { PatientProvider } from '../../../lib/context/PatientProvider'
import Main from './Views/Main'

function Index() {
  return(
    <Layout title={"Paciente"} titleInPage={"Paciente"} sidebarVisible={true}>
      <PatientProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
              <div className="w-auto flex justify-start items-end gap-1">
                <Link href="/patients" className="subtitle-page">Pacientes</Link>
                <p className='text-sm font-light text-slate-500'>/</p>
                <p className="title-page">Paciente</p>
              </div>
              <div className="w-auto flex justify-end items-center gap-2">
                <Link href="/patients/patient/attention" className="btn btn-primary">Expediente médico</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </PatientProvider>
    </Layout>
  )
}

export default Index