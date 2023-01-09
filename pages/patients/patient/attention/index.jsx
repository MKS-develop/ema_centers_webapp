import React from 'react'
import Link from 'next/link'
import { Layout } from '../../../../components/Layout'
import { AttentionProvider } from '../../../../lib/context/AttentionProvider'
import Main from './Views/Main'

function Index() {
  return(
    <Layout title={"Expediente médico"} titleInPage={"Expediente médico"} sidebarVisible={true}>
      <AttentionProvider>
        <div className="page-header">
          <div className="w-full text-center mb-0">
            <div className="flex justify-between items-center">
                <div className="w-auto flex justify-start items-end gap-1">
                    <Link href="/patients" className="subtitle-page">Pacientes</Link>
                    <p className='text-sm font-light text-slate-500'>/</p>
                    <Link href={{
                      pathname: '/patients/patient',
                      query: {patient_id: "ACV32JH"}
                    }} className="subtitle-page">Paciente</Link>
                    <p className='text-sm font-light text-slate-500'>/</p>
                    <p className="title-page">Expediente médico</p>
                </div>
              <div className="w-auto flex justify-end items-center gap-2">
                <Link href="/patients/new-patient" className="btn btn-primary">Nueva consulta</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </AttentionProvider>
    </Layout>
  )
}

export default Index