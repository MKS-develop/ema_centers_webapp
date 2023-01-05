import React from 'react'
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

function SuccessView() {
  return (
    <div className='relative flex flex-col items-center justify-center gap-8 w-full text-center h-[50vh]'>
      <motion.span 
      initial={{y: 6, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={`rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center bg-success shadow-lg shadow-success`}>
        <FiCheck size={40} color={"#FFF"} />
      </motion.span>
      <div className="relative flex flex-col items-center justify-center gap-2">
        <p className='font-bold text-2xl text-slate-900'>Buen trabajo</p>
        <p className='font-light text-base text-slate-900'>El paciente fue creado exitosamente; ahora puedes reservarle citas y acceder a su expediente medico</p>
      </div>
    </div>
  )
}

export default SuccessView