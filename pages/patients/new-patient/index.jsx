import React, {useState, useEffect} from 'react'
import { NewPatientProvider } from '../../../lib/context/NewPatientProvider'
import { Layout } from '../../../components/Layout'
import Main from './Views/Main'
import Link from 'next/link'

function Index() {

    return(
        <Layout title={"Crear un paciente"} titleInPage={"Crear un paciente"} sidebarVisible={true}>
            <NewPatientProvider>
                <div className="page-header">
                    <div className="flex justify-between items-center">
                        <div className="w-auto flex justify-start items-end gap-1">
                            <Link href="/patients" className="subtitle-page">Pacientes</Link>
                            <p className='text-sm font-light text-slate-500'>/</p>
                            <p className="title-page">Crear un paciente</p>
                        </div>
                    </div>
                </div>
                <div className="main-wrapper">
                    <Main/>
                </div>
            </NewPatientProvider>
        </Layout>
    )
}

export default Index