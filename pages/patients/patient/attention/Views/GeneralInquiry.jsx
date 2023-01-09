import React from 'react'
import useAttention from '../../../../../lib/hooks/useAttention'

function GeneralInquiry() {

    const { activeForm } = useAttention()

    return (
        <>
            <div className="w-full border-b h-fit pb-[1.5%]">
                <p className='font-semibold text-lg text-slate-900'>Consulta general</p>
            </div>
            <div className="w-full h-fit max-h-[75vh] overflow-y-auto flex box-border flex-wrap gap-4 py-4">
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Fecha consulta</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="date" className='form-control' placeholder=''/>
                </div>
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Servicio atención</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Fecha consulta</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="date" className='form-control' placeholder=''/>
                </div>
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Servicio atención</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Fecha consulta</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="date" className='form-control' placeholder=''/>
                </div>
                <div className="input-group w-full mb-1">
                    <p className='input-label'>Servicio atención</p>
                    <p className='text-[12px] text-slate-500 font-sm mb-1'>Fecha de la consulta</p>
                    <input type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
            </div>
        </>
    )
}

export default GeneralInquiry