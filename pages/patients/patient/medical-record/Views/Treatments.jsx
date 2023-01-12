import React from 'react'
import useMedicalRecord from '../../../../../lib/hooks/useMedicalRecord'

function Treatments() {

    let listOfTreatments = [
        {},
        {},
        {}
    ]

    const {
        setTitle,
        setPopupActive,
        setPopupSectionActive
    } = useMedicalRecord()

    const TreatmentComponent = ({data}) => {
        return(
            <div className="w-full h-[33%] cursor-pointer bg-white border-b border-slate-200 flex justify-start items-center gap-3 rounded-md p-[2%_0%] overflow-hidden">
                
                    <div className="flex flex-col justify-start items-start w-[15%]">
                        <p className='font-light text-[0.8rem] text-slate-400'>Estado</p>
                        <p className='font-semibold p-[3%_3%] text-center text-[0.7rem] rounded text-green-900 bg-green-400 w-full'>Activo</p>
                    </div>
                    <div className="flex flex-col justify-start items-start w-[40%]">
                        <p className='font-light text-[0.8rem] text-slate-400'>Tratamiento</p>
                        <p className='font-semibold text-[0.9rem] text-slate-900'>{data["date"] ?? "Acetaminofen" }</p>
                    </div>
                    <div className="flex flex-col justify-start items-start w-[30%]">
                        <p className='font-light text-[0.8rem] text-slate-400'>Cantidad</p>
                        <p className='font-semibold text-[0.9rem] text-slate-900'>{data["date"] ?? "300mg" }</p>
                    </div>
                    <div className="flex flex-col justify-start items-start w-[15%]">
                        <p className='font-light text-[0.8rem] text-slate-400'>Durante</p>
                        <p className='font-semibold text-[0.9rem] text-slate-900'>{data["date"] ?? "2 sem." }</p>
                    </div>

            </div>
        )
    }

    return (
        <div className='flex flex-col items-start w-full h-full'>
            <div className="w-full flex justify-between items-center border-b pb-2">
                <p className="font-semibold text-lg text-slate-900">Tratamientos</p>
                <p onClick={()=>{
                    setTitle("Tratamientos"),
                    setPopupActive(true),
                    setPopupSectionActive(1)
                }} className="font-sm text-base text-slate-900 cursor-pointer">ver más</p>
            </div>
            {listOfTreatments.length > 0 ? listOfTreatments.map((treatment, i)=> <TreatmentComponent data={treatment} key={i}/>) : 
                <div className='w-full h-full flex flex-col justify-center items-center text-center px-[15%]'>
                    <p className='font-semibold text-lg text-primary'>No hay tratamientos</p>
                    <p className='font-light text-sm text-slate-400'>Este paciente no tiene tratamientos activos o previos</p>
                </div>
            }
        </div>
    )
}

export default Treatments