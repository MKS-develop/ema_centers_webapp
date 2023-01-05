import React, {useState} from 'react'
import useNewPatient from '../../../../lib/hooks/useNewPatient'

import FormClient from './FormClient'
import CenterSelection from './CenterSelection'
import AppointmentCreation from './AppointmentCreation'
import SuccessView from './SuccessView'

import { FiCheck } from 'react-icons/fi';
import Link from 'next/link'

function Main() {

    const { stepActive, updateSteps, listOfSteps } = useNewPatient()

    const StepSelector = ({data}) => {
        return(
            <div className={`flex justify-start items-center gap-3`} >
                <span className={`rounded-full w-[45px] h-[45px] flex flex-col justify-center items-center
                ${data["status"] ? "bg-success shadow-lg shadow-success/70" : data["step"] === stepActive ? "bg-primary text-white shadow-lg shadow-primary/50 font-bold" : "bg-white text-primary shadow-lg border border-primary/10"}
                `}>
                    {data["status"] ? <FiCheck color={"#FFF"} />
                    : (data["step"] + 1)}</span>
                <p className={`${data["step"] === stepActive ? "font-semibold" : "font-light"} text-primary text-base`}>{data["label"]}</p>
            </div>
        )
    }

    return (
        <div className='w-full px-[10%] py-[3%] flex justify-center items-start gap-5'>
            <div className='w-1/3 h-fit relative flex flex-col justify-start items-start gap-10'>
                <p className='text-slate-900 text-sm font-light'>Crear un nuevo paciente te permitira agendar citas y acceder a su expediente médico entre otras cosas.</p>
                <div className="relative flex flex-col justify-start items-start gap-7">
                    {listOfSteps.map((prv, i)=> <StepSelector data={prv} key={i}/> )}
                </div>
                {stepActive < 3 && <div onClick={updateSteps} className='btn btn-primary w-full'>Siguiente</div>}
                {stepActive === 3 && <Link href="/patients" className='btn btn-success w-full'>Finalizar</Link>}
            </div>
            <div className="relative w-1/2 h-fit flex flex-col justify-start items-center gap-10 border-l px-5">
                {stepActive === 0 && <FormClient/>}
                {stepActive === 1 && <CenterSelection/>}
                {stepActive === 2 && <AppointmentCreation/>}
                {stepActive === 3 && <SuccessView/>}
            </div>
        </div>
    )
}

export default Main