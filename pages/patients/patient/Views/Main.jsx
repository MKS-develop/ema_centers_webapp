import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import PatientBottomBar from './PatientBottomBar';
import PatientInfo from './PatientInfo';

function Main() {

    const router = useRouter();
    const data = router.query;
    const [loadedPatient, setLoadedPatient] = useState(false)
    const [patient, setPatient] = useState({})

    let patients = [
        {
            patient_id: "ACV32JH",
            patient_name: "Jose",
            first_name: "Hernandez",
            second_name: "Gómez",
            curp: "ACV32",
            direction: "Centro de salud",
            city: "Durango",
            phone: "+58 414-133-2445",
            gender: "Hombre",
            pic_profile: "https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg",
        }
    ]

    
    function findPatient(data){
        setPatient(patients.find((prv)=>( prv["patient_id"] === data["patient_id"] )))
        setLoadedPatient(true)
    }

    useEffect(() => {
      findPatient(data)
    }, [loadedPatient])

    return (
        <div className="relative flex justify-between items-start w-full h-[82vh] gap-4 bg-slate-100 p-[1.5%]">

            <div className="bg-white relative w-[25%] h-fit flex flex-col justify-center items-center gap-2 p-[1.5%]">
                <div className="relative flex flex-col justify-end items-center h-[50%] w-full">
                    <img className='w-[8rem] h-[8rem] object-cover rounded-md' src={patient?.pic_profile} alt="" />
                </div>
                <p className='font-semibold text-lg text-slate-900'>{patient?.patient_name + " " + patient?.first_name}</p>
                <div className='w-full flex justify-center items-center gap-2'>
                    <span className='rounded-full w-[12px] h-[12px] bg-warning'></span>
                    <p className='text-sm font-medium text-slate-900'>En atencion</p>
                </div>
            </div>

            <div className="bg-white relative w-[50%] h-fit flex flex-wrap justify-between items-start gap-y-5 p-[1.5%]">
                <div className="w-full border-b h-fit pb-[1.5%]">
                    <p className='font-semibold text-lg text-slate-900'>Información personal</p>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Nombre(s)</p>
                    <input defaultValue={patient?.patient_name} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Primer apellido</p>
                    <input defaultValue={patient?.first_name} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Segundo apellido</p>
                    <input defaultValue={patient?.second_name} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>CURP</p>
                    <input defaultValue={patient?.patient_name} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Teléfono</p>
                    <input defaultValue={patient?.curp} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Ciudad</p>
                    <input defaultValue={patient?.city} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="input-group w-[48%]">
                    <p className='input-label'>Genero</p>
                    <input defaultValue={patient?.gender} type="text" className='form-control' placeholder='Escriba el nombre del paciente'/>
                </div>
                <div className="w-full border-t h-fit flex justify-end items-center pt-[1.5%]">
                    <div className="btn btn-primary">Guardar</div>
                </div>
            </div>

            <div className="bg-white relative w-[25%] h-fit flex flex-wrap justify-between items-start gap-y-5 p-[1.5%]">
                <div className="w-full border-b h-fit pb-[1.5%]">
                    <p className='font-semibold text-lg text-slate-900'>Parientes</p>
                </div>
                <div className="w-full h-fit py-[5%] text-center">
                    <p className='font-semibold text-base text-slate-900'>Sin parientes</p>
                    <p className='font-light text-sm text-slate-600'>No hay parientes relacionados a este paciente</p>
                </div>
            </div>
        </div>
    )
}

export default Main