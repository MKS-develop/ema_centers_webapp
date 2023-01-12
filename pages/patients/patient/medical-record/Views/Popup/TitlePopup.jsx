import React from 'react'
import useMedicalRecord from '../../../../../../lib/hooks/useMedicalRecord'
import { FiX } from 'react-icons/fi';

function TitlePopup() {

    const {
        title,
        setTitle,
        setPopupActive,
        setPopupSectionActive,
        popupSectionActive
    } = useMedicalRecord()

    return (
        <div className='w-full h-fit flex justify-between items-center border-b p-[1.5%_1.5%] font-semibold text-left text-lg text-slate-900'>
            <div className="flex justify-between items-center gap-3">
                {popupSectionActive === 4 && <span onClick={()=>{ setPopupSectionActive(0), setTitle("Historial de consultas") }} className='text-primary text-sm font-light cursor-pointer'>Regresar</span>}
                {title}
            </div>
            <FiX onClick={()=>{setPopupActive(false)}} className='cursor-pointer' size={25}/>
        </div>
    )
}

export default TitlePopup