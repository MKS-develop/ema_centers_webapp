import React from 'react'
import useAttention from '../../../../../lib/hooks/useAttention'
import Form from './Form'

function Main() {

    const { activeForm, setActiveForm } = useAttention()

    return (
        <div className="relative w-full h-[82vh] flex jusfity-between items-center">
            <div className="w-[20%] pt-[2.5%] h-full flex flex-col justify-start items-center px-[2.5%] overflow-y-auto">
                
                <img className='w-[8rem] h-[8rem] mb-5 object-cover rounded-md' src={"https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg"} alt="" />
                <p className='font-semibold text-lg text-slate-900'>Jose Hernandez</p>
                <p className='font-light mb-1 text-sm text-slate-500'>ACV32</p>
                <p className='font-light mb-1 text-sm text-slate-500'>+58 414-133-2445</p>
                <p className='font-light mb-1 text-sm text-slate-500'>Hombre</p>
                <div className="flex flex-col h-fit w-full jusfity-start items-start gap-3 mt-5">
                    <div className="relative w-full">
                        <p className='font-bold text-sm text-primary mb-3'>Enlaces</p>
                        <div className="w-full h-fit flex flex-col justify-start items-start">
                            <p onClick={()=>{ setActiveForm(0) }} className={activeForm === 0 ? "eme-link-active" : 'eme-link-disabled'}>Consulta general</p>
                            <p onClick={()=>{ setActiveForm(1) }} className={activeForm === 1 ? "eme-link-active" : 'eme-link-disabled'}>Atención prenatal</p>
                            <p onClick={()=>{ setActiveForm(2) }} className={activeForm === 2 ? "eme-link-active" : 'eme-link-disabled'}>Puerperio</p>
                            <p onClick={()=>{ setActiveForm(3) }} className={activeForm === 3 ? "eme-link-active" : 'eme-link-disabled'}>Salud del ninio</p>
                            <p onClick={()=>{ setActiveForm(4) }} className={activeForm === 4 ? "eme-link-active" : 'eme-link-disabled'}>Cáncer en menores de 18 anios</p>
                            <p onClick={()=>{ setActiveForm(5) }} className={activeForm === 5 ? "eme-link-active" : 'eme-link-disabled'}>Enfermedades diarreicas afudas (EDA’S)</p>
                            <p onClick={()=>{ setActiveForm(6) }} className={activeForm === 6 ? "eme-link-active" : 'eme-link-disabled'}>Infecciones respiratorias agudas IRA´S</p>
                            <p onClick={()=>{ setActiveForm(7) }} className={activeForm === 7 ? "eme-link-active" : 'eme-link-disabled'}>Prevención de accidentes</p>
                            <p onClick={()=>{ setActiveForm(8) }} className={activeForm === 8 ? "eme-link-active" : 'eme-link-disabled'}>Intervenciones gerontológicas</p>
                            <p onClick={()=>{ setActiveForm(9) }} className={activeForm === 9 ? "eme-link-active" : 'eme-link-disabled'}>Promoción de la salud</p>
                            <p onClick={()=>{ setActiveForm(10) }} className={activeForm === 10 ? "eme-link-active" : 'eme-link-disabled'}>Referencia y contrarreferencia</p>
                            <p onClick={()=>{ setActiveForm(11) }} className={activeForm === 11 ? "eme-link-active" : 'eme-link-disabled'}>Telemedicina</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full flex flex-col p-[1.5%_1.5%_0%_1.5%] border-l">
                <Form/>
            </div>
            <div className="w-[30%] h-full p-[1.5%_1.5%_0%_1.5%]">
                <div className="w-full border-b h-fit pb-[1.5%]">
                    <p className='font-semibold text-lg text-slate-900'>Signos vitales</p>
                </div>
            </div>
        </div>
    )
}

export default Main