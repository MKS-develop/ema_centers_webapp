import React from 'react'

function ClientInfo() {

    let patient = {
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

    return (
        <div className='w-full h-full flex justify-between items-center'>
            <div className="w-1/3 h-full gap-3 flex flex-col content-center justify-center items-center">
                    <img className='w-[9rem] h-[9rem] object-cover rounded-full' src={patient?.pic_profile} alt="" />
                <p className='font-medium p-[1.5%_7%] rounded text-sm text-yellow-800 bg-yellow-300'>En atención</p>
            </div>
            <div className="h-full w-px bg-slate-300"></div>
            <div className="w-2/3 h-full gap-3 p-[2%_3.5%] flex flex-row flex-wrap content-between justify-start items-between">
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Nombre(s)</p>
                    <p className='data-text-default'>{patient?.patient_name}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Primer apellido</p>
                    <p className='data-text-default'>{patient?.first_name}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Segundo apellido</p>
                    <p className='data-text-default'>{patient?.second_name}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>CURP</p>
                    <p className='data-text-default'>{patient?.curp}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Teléfono</p>
                    <p className='data-text-default'>{patient?.phone}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Ciudad</p>
                    <p className='data-text-default'>{patient?.city}</p>
                </div>
                <div className="input-group w-[31%] h-[7vh]">
                    <p className='font-light text-sm text-slate-500'>Genero</p>
                    <p className='data-text-default'>{patient?.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientInfo