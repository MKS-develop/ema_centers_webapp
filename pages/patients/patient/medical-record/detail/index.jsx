import React from 'react'
import Link from 'next/link'
import { Layout } from '../../../../../components/Layout'
import { MedicalRecordDetailProvider } from '../../../../../lib/context/MedicalRecordDetailProvider'
import Main from './Views/Main'

function Index() {
  return(
    <Layout title={"Detalle de consulta"} titleInPage={"Detalle de consulta"} sidebarVisible={true}>
      <MedicalRecordDetailProvider>
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
                <Link href="/patients/patient/medical-record" className="subtitle-page">Expediente médico</Link>
                <p className='text-sm font-light text-slate-500'>/</p>
                <p className="title-page">Detalle de consulta</p>
              </div>

            </div>
          </div>
        </div>
        <div className="main-wrapper">
          <Main/>
        </div>
      </MedicalRecordDetailProvider>
    </Layout>
  )
}

export default Index