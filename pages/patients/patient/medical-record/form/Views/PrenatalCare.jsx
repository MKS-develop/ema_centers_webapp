import React from 'react'
import useMedicalRecordForm from '../../../../../../lib/hooks/useMedicalRecordForm'

function PrenatalCare() {

    const { activeForm } = useMedicalRecordForm()

    let listOfInputs = [
        {title: "Relacion temporal embarazo", value: "relacionTemporalEmbarazo"},
        {title: "Trimestre gestacional", value: "trimestreGestacional"},
        {title: "Primera vez alto riesgo", value: "primeraVezAltoRiesgo"},
        {title: "Complicación por diavetes", value: "complicacionPorDiavetes"},
        {title: "Complicación por infección urinaria", value: "complicacionPorInfeccionUrinaria"},
        {title: "Complicación por preeclampsia eclampsia", value: "complicacionPorPreeclampsiaEclampsia"},
        {title: "Complicación por hemorragia", value: "complicacionPorHemorragia"},
        {title: "Sospecha Covid 19", value: "sospechaCovid19"},
        {title: "Covid19 confirmado", value: "covid19Confirmado"},
        {title: "OtrasAccPrescAcidoFolico", value: "otrasAccPrescAcidoFolico"},
        {title: "OtrasAccApoyoTranslado", value: "otrasAccApoyoTranslado"},
    ]

    return (
        <>
            <div className="w-full border-b h-fit pb-[1.5%]">
                <p className='font-semibold text-lg text-slate-900'>Atención prenatal</p>
            </div>
            <div className="w-full flex box-border flex-wrap gap-4 py-4">
                {listOfInputs.map((input, i)=>{
                    return(
                        <div className="input-group-flex w-[49%] mb-3 gap-4">
                            <div className="flex flex-col justify-start items-start w-1/2">
                                <p className='input-label'>{input["title"]}</p>
                                <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                            </div>
                            <input type="text" className='form-control  w-1/2' placeholder=''/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PrenatalCare