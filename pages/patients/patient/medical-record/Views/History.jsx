import React from 'react'
import Link from 'next/link'
import useMedicalRecord from '../../../../../lib/hooks/useMedicalRecord'

function History() {

    let listOfDates = [
        {},
        {},
        {}
    ]
    
    const {
        setTitle,
        setPopupActive,
        setPopupSectionActive
    } = useMedicalRecord()

    const DateComponent = ({data}) => {
        return(
            <div onClick={()=>{
                setTitle("Detalle de consulta"),
                setPopupActive(true),
                setPopupSectionActive(4)
            }} className="w-full h-[10vh] my-3 cursor-pointer bg-white shadow-md border border-slate-200 flex justify-start items-center gap-3 rounded-md p-[2%_2%] overflow-hidden">
                
                <div className="flex flex-col justify-start items-start w-[30%]">
                    <p className='font-medium text-[1.1rem] text-primary'>{data["date"] ?? "03/01/2023" }</p>
                    <p className='font-light text-[0.8rem] text-slate-400'>12:00 PM</p>
                </div>
                <div className="flex flex-col justify-start items-start w-[20%]">
                    <p className='font-light text-[0.8rem] text-slate-400'>Diagnostico</p>
                    <p className='font-semibold text-[0.9rem] text-slate-900 whitespace-nowrap w-full overflow-hidden text-ellipsis'>{data["date"] ?? "Coronavirus" }</p>
                </div>
                <div className="flex flex-col justify-start items-start w-[20%]">
                    <p className='font-light text-[0.8rem] text-slate-400'>Centro</p>
                    <p className='font-semibold text-[0.9rem] text-slate-900 whitespace-nowrap w-full overflow-hidden text-ellipsis'>{data["date"] ?? "Centro de salud" }</p>
                </div>
                <div className="flex flex-col justify-start items-start w-[30%]">
                    <p className='font-light text-[0.8rem] text-slate-400'>Servicio atencion</p>
                    <p className='font-semibold text-[0.9rem] text-slate-900 whitespace-nowrap w-full overflow-hidden text-ellipsis'>{data["date"] ?? "CONSULTA EXTERNA GENERAL" }</p>
                </div>

            </div>
        )
    }

    return (
        <div className='flex flex-col items-start w-full h-full'>
            <div className="w-full flex justify-between items-center border-b pb-2">
                <p className="font-semibold text-lg text-slate-900">Historial de consultas</p>
                <p onClick={()=>{
                    setTitle("Historial de consultas"),
                    setPopupActive(true),
                    setPopupSectionActive(0)

                }} className="font-sm text-base text-slate-900 cursor-pointer">ver más</p>
            </div>
            <div className="h-full w-full overflow-y-auto gap-3">
                {listOfDates.length > 0 ? listOfDates.map((date, i)=> <DateComponent data={date} key={i}/>) : 
                    <div className='w-full h-full flex flex-col justify-center items-center text-center px-[15%]'>
                        <p className='font-semibold text-lg text-primary'>No hay citas</p>
                        <p className='font-light text-sm text-slate-400'>Este paciente no tiene citas previas</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default History