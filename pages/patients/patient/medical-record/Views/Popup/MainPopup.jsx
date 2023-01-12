import React from 'react'
import useMedicalRecord from '../../../../../../lib/hooks/useMedicalRecord'
import TitlePopup from './TitlePopup'
import History from './History'
import Treatments from './Treatments'
import Diagnoses from './Diagnoses'
import DateDetail from './DateDetail'

function MainPopup() {
  
  const {
    popupActive,
    setPopupActive,
    popupSectionActive,
    setPopupSectionActive,
    setTitle
  } = useMedicalRecord()

  let listTabs = [
    "Historial de consultas",
    "Tratamientos",
    "Diagnosticos",
  ]

  const TabComponent = ({title, index}) => {
    return(
      <div onClick={()=>{ setPopupSectionActive(index), setTitle(title) }} className={`w-fit text-slate-900 font-semibold text-[0.9rem] p-[1%_4%] cursor-pointer 
        ${ popupSectionActive === index && "border-secondary border-b-[3px]"}
      `}>{title}</div>
    )
  }

  return (
    <div className='fixed w-full h-screen overflow-hidden z-20 top-0 right-0 bg-slate-900/50 flex justify-end items-start box-border'>
      
      <div className='bg-slate-100 w-1/2 h-screen block relative box-border'>
        
        <div className={`px-[5%] relative block w-full ${popupSectionActive !== 4 ? "h-[25%]" : "h-fit"}`}>
          <TitlePopup/>
          {popupSectionActive !== 4 && <div className="w-full h-[70%] flex justify-center items-center">
            
            <div className="flex flex-col justify-center items-center h-full w-[30%]">
              <p className='font-medium text-4xl text-primary'>9</p>
              <p className='font-light text-base text-slate-400'>Citas</p>
            </div>

            <div className="flex flex-col justify-center items-center h-full w-[30%] border-l border-r">
              <p className='font-medium text-4xl text-primary'>6</p>
              <p className='font-light text-base text-slate-400'>Tratamientos</p>
            </div>

            <div className="flex flex-col justify-center items-center h-full w-[30%]">
              <p className='font-medium text-4xl text-primary'>0</p>
              <p className='font-light text-base text-slate-400'>Diagnosticos</p>
            </div>

          </div>}
        </div>

        {popupSectionActive !== 4 ? <div className="relative h-[70%] w-full bg-white">
          <div className="w-full px-[5%] flex justify-start items-center border-b border-slate-200 bg-slate-100 h-fit">
            {listTabs.map((tab, i) => <TabComponent title={tab} index={i} key={i}/> )}
          </div>
          <div className="h-full bg-white overflow-y-auto p-[2.5%_5%]">
            {popupSectionActive === 0 && <History/>}
            {popupSectionActive === 1 && <Treatments/>}
            {popupSectionActive === 2 && <Diagnoses/>}
          </div>
        </div> :
          <div className="h-full bg-white overflow-y-auto p-[2.5%_5%]">
            <DateDetail/>
          </div>
        }

      </div>

    </div>
  )
}

export default MainPopup