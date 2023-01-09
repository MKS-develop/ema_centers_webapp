import React from 'react'
import {motion} from 'framer-motion'

const DropdownNotifications = () => {
  return (
    <motion.div 
    initial={{opacity: 0.2}}
    animate={{opacity: 1}}
    className={`absolute overflow-hidden top-[110%] right-[0%] bg-white border-slate-200 border shadow-xl w-[26rem] h-[40vh] max-h-[40vh] hover:text-slate-900 text-slate-900`}>
        DropdownNotifications
    </motion.div>
  )
}

export default DropdownNotifications