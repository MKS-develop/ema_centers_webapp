import React, { useState } from 'react'
import { FiBell, FiGrid } from "react-icons/fi";
import DropdownNotifications from './DropdownNotifications';

function Navbar() {

  const IconButton = ({children, dropdownChildren, hasCounter = false, counterNumber = 0}) => {

    const [dropdownState, setDropdownState] = useState(false)
    const [alreadyViewedState, setalreadyViewedState] = useState(false)

    return(
      <>
        <div onClick={()=>{ setalreadyViewedState(true), setDropdownState(!dropdownState) }} className='transition relative w-[40px] h-[40px] rounded-full cursor-pointer flex flex-col justify-center items-center hover:bg-primary bg-white hover:text-white text-primary text-[1.2rem]'>
          {(hasCounter && !alreadyViewedState) && <span className='w-[22px] h-[22px] rounded-full flex flex-col justify-center items-center bg-red-600 text-white text-[0.7rem] absolute -left-[4px] -top-[4px]'>{counterNumber}</span> }
          {children}
        </div>
        {/* <div className={dropdownState ? "block" : "hidden" }>{dropdownChildren}</div> */}
      </>
    )
  }

  return (
    <div className='navbar'>
      
      <div className="flex justify-between items-center gap-4 w-[25%]">
        <IconButton hasCounter={false}>
          <FiGrid/>
        </IconButton>
        <IconButton hasCounter={true} counterNumber={10}>
          <FiBell/>
          {/* <DropdownNotifications/> */}
        </IconButton>
        <div className="flex relative w-[65%]  gap-2">
          <div className="rounded-md w-[42px] h-[42px] block cursor-pointer overflow-hidden">
            <img className="h-full w-full object-cover" src="https://accountmanagement.gettyimages.com/Account/ProfileImage/8b931d4f-f756-4ae1-9380-e4ed329a4ce1.jpg" alt="profile-picture" />
          </div>
          <div className="flex flex-col justify-between w-3/4">
            <p className='font-bold text-[0.9rem] text-slate-900 w-full overflow-hidden text-ellipsis whitespace-nowrap'>Dylan Gonzalez</p>
            <p className='font-light text-[0.8rem] text-slate-500 w-full overflow-hidden text-ellipsis whitespace-nowrap'>Especialista</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Navbar