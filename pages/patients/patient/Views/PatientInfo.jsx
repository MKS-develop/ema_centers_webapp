import React from 'react'

function PatientInfo({patient = {}}) {
  return (
    <div className="h-[40%] w-full flex justify-between relative bg-white border-r">
        <div className="w-[30%] h-full flex flex-col justify-center items-center relative border-r gap-2 py-[2%]">
            <div className="relative flex flex-col justify-end items-center h-[50%] w-full">
                <img className='w-[6rem] h-[6rem] object-cover rounded-md' src={patient?.pic_profile} alt="" />
            </div>
            <p className='font-semibold text-lg text-slate-900'>{patient?.patient_name + " " + patient?.first_name}</p>
            <p className='font-light text-sm text-slate-500'>{patient?.curp}</p>
        </div>
        <div className="relative w-[70%] h-full flex flex-wrap justify-between items-center p-[3%]">

            <div className="input-group w-[32%]">
                <p className='input-label'>Nombre(s)</p>
                <p className='data-text-default'>{patient?.patient_name}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>Primer apellido</p>
                <p className='data-text-default'>{patient?.first_name}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>Segundo apellido</p>
                <p className='data-text-default'>{patient?.second_name}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>CURP</p>
                <p className='data-text-default'>{patient?.curp}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>Teléfono</p>
                <p className='data-text-default'>{patient?.phone}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>Ciudad</p>
                <p className='data-text-default'>{patient?.city}</p>
            </div>
            <div className="input-group w-[32%]">
                <p className='input-label'>Genero</p>
                <p className='data-text-default'>{patient?.gender}</p>
            </div>
        </div>
    </div>
  )
}

export default PatientInfo