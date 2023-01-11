import React, { useState } from 'react'
import useMedicalRecordForm from '../../../../../../lib/hooks/useMedicalRecordForm'
import Form from './Form'

function Main() {

    const { activeForm, setActiveForm } = useMedicalRecordForm()

    let listOfLinks = [
        {index: 0, title: "Consulta general"},
        {index: 1, title: "Atención prenatal"},
        {index: 2, title: "Puerperio"},
        {index: 3, title: "Otros eventos"},
        {index: 4, title: "Salud del niño"},
        {index: 5, title: "Cáncer en menores de 18 años"},
        {index: 6, title: "Enfermedades diarreicas afudas (EDA’S)"},
        {index: 7, title: "Infecciones respiratorias agudas IRA´S"},
        {index: 8, title: "Prevención de accidentes"},
        {index: 9, title: "Intervenciones gerontológicas"},
        {index: 10, title: "Promoción de la salud"},
        {index: 11, title: "Referencia y contrarreferencia"},
        {index: 12, title: "Telemedicina"},
    ]

    
    return (
        <div className="relative w-full h-[82vh] flex jusfity-between items-start bg-slate-100">

            <div className="w-[25%] pt-[2.5%] h-full flex flex-col justify-start bg-white shadow-lg items-center px-[2.5%] overflow-y-auto">    
                <div className="relative w-full">
                    <p className='font-bold text-sm text-primary mb-3'>Secciones</p>
                    <div className="w-full h-fit flex flex-col justify-start items-start">
                        {listOfLinks.map((link, i) => {
                            return(
                                <p onClick={()=>{ setActiveForm(i) }} className={activeForm === i ? "eme-link-active" : 'eme-link-disabled'}>{link["title"]}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-[75%] h-full p-[2%] overflow-hidden overflow-y-auto">
                <div className="w-full h-fit p-[3%_3%_0%_3%] bg-white rounded-md shadow-sm">
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Main