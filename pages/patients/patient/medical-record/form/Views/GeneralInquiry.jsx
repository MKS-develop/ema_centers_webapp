import React from 'react'
import useMedicalRecordForm from '../../../../../../lib/hooks/useMedicalRecordForm'

function GeneralInquiry() {

    const { activeForm } = useMedicalRecordForm()

    return (
        <>
            <div className="w-full border-b h-fit pb-[1.5%]">
                <p className='font-semibold text-lg text-slate-900'>Consulta general</p>
            </div>
            <div className="w-full flex box-border flex-wrap gap-4 py-4">
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Fecha consulta</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="date" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Servicio atención</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Peso</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Talla</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Frecuencia cardiaca</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Frecuencia respiratoria </p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Temperatura</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Circunferencia cintura</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Sistólica</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Diastólica</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Saturación oxigeno</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Glucemia</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Tipo medición</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Nro. tiras control utilizadas</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="number" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Embarazada sin diabetes</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Primera vez anio</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Primera vez uneme Saih </p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Tipo dificultad</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Grado dificultad</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Origen dificultad</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Migrante</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Relacion temporal</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Descripción diagnostico (1)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Codigo CIE diagnostico (1)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Primera vez diagnostico (1)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Descripción diagnostico (2)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Codigo CIE diagnostico (2)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Primera vez diagnostico (2)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Descripción diagnostico (3)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Codigo CIE diagnostico (3)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Primera vez diagnostico (3)</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Atención pregestacional RT</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Riesgo</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>
                <div className="input-group-flex w-[49%] mb-3 gap-4">
                    <div className="flex flex-col justify-start items-start w-1/2">
                        <p className='input-label'>Sintomatico respiratorio TB</p>
                        <p className='text-[12px] text-slate-500 font-sm mb-1'>Descripción del campo</p>
                    </div>
                    <input type="text" className='form-control  w-1/2' placeholder=''/>
                </div>

            </div>
        </>
    )
}

export default GeneralInquiry