import React, {useState} from 'react'
import Background from './Background'
import Dates from './Dates'

function PatientBottomBar() {

    const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='w-full h-full flex flex-col items-center justify-between'>
        <div className="w-full h-[15%] flex justify-start items-center">
            <div onClick={()=>{ setActiveTab(0) }} className={`cursor-pointer transition w-auto h-auto text-[12px] p-[1.2%_5%] ${activeTab === 0 ? "border-b-2 border-b-primary text-primary font-bold" : "border-b-2 border-b-slate-300 text-slate-500 font-light"}`}>Historial</div>
            <div onClick={()=>{ setActiveTab(1) }} className={`cursor-pointer transition w-auto h-auto text-[12px] p-[1.2%_5%] ${activeTab === 1 ? "border-b-2 border-b-primary text-primary font-bold" : "border-b-2 border-b-slate-300 text-slate-500 font-light"}`}>Antecedentes</div>
        </div>
        <div className="w-full h-[85%] overflow-hidden">
            {activeTab === 0 && <Dates/>}
            {activeTab === 1 && <Background/>}
        </div>
    </div>
  )
}

export default PatientBottomBar