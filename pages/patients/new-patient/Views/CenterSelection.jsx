import React from 'react'
import useNewPatient from '../../../../lib/hooks/useNewPatient'
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

function CenterSelection() {

  const {selectedCenter, setSelectedCenter} = useNewPatient()

  let centers = [
    {
      localidadId: "1",
      nombreLocalidad: "CENTRO ESTATAL DE CANCEROLOGIA", 
      direccionDetallada: "AV. 5 DE FEBRERO Y NORMAN FUENTES S/N", 
      locacionImg: "https://firebasestorage.googleapis.com/v0/b/ema-dev-2fe4b.appspot.com/o/Aliados%20imagenes%2FCENTRO%20ESTATAL%20DE%20CANCEROLOGIA.jpeg?alt=media&token=7495aa60-d988-49af-8967-0e39f8041160"
    },
    {
      localidadId: "2",
      nombreLocalidad: "CENTRO ESTATAL DE CANCEROLOGIA", 
      direccionDetallada: "AV. 5 DE FEBRERO Y NORMAN FUENTES S/N", 
      locacionImg: "https://firebasestorage.googleapis.com/v0/b/ema-dev-2fe4b.appspot.com/o/Aliados%20imagenes%2FCENTRO%20ESTATAL%20DE%20CANCEROLOGIA.jpeg?alt=media&token=7495aa60-d988-49af-8967-0e39f8041160"
    },
    {
      localidadId: "3",
      nombreLocalidad: "CENTRO ESTATAL DE CANCEROLOGIA", 
      direccionDetallada: "AV. 5 DE FEBRERO Y NORMAN FUENTES S/N", 
      locacionImg: "https://firebasestorage.googleapis.com/v0/b/ema-dev-2fe4b.appspot.com/o/Aliados%20imagenes%2FCENTRO%20ESTATAL%20DE%20CANCEROLOGIA.jpeg?alt=media&token=7495aa60-d988-49af-8967-0e39f8041160"
    },
    {
      localidadId: "4",
      nombreLocalidad: "CENTRO ESTATAL DE CANCEROLOGIA", 
      direccionDetallada: "AV. 5 DE FEBRERO Y NORMAN FUENTES S/N", 
      locacionImg: "https://firebasestorage.googleapis.com/v0/b/ema-dev-2fe4b.appspot.com/o/Aliados%20imagenes%2FCENTRO%20ESTATAL%20DE%20CANCEROLOGIA.jpeg?alt=media&token=7495aa60-d988-49af-8967-0e39f8041160"
    },

  ]

  const CenterCard = ({data}) => {
    return( 
      <div onClick={()=>{setSelectedCenter(data)}} className="group flex flex-col gap-3 w-[47%] box-border cursor-pointer">
        <div className="relative flex flex-col justify-center items-center h-[15vh] w-full overflow-hidden rounded">
          {selectedCenter["localidadId"] === data["localidadId"] && 
            <motion.span 
            initial={{y: 6, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            className={`absolute z-10 rounded-full w-[45px] h-[45px] flex flex-col justify-center items-center bg-success shadow-lg shadow-success/70`}>
              <FiCheck color={"#FFF"} />
            </motion.span>
          }                    
          <img className='transition w-full h-full object-cover' src={data["locacionImg"]} alt={data["nombreLocalidad"]} />
        </div>
        <div className="relative w-full">
          <p className='text-sm font-bold text-slate-900 block text-ellipsis overflow-hidden whitespace-nowrap w-full'>{data["nombreLocalidad"]}</p>
          <p className='text-xs font-light text-slate-500 block overflow-hidden text-ellipsis whitespace-nowrap w-full'>{data["direccionDetallada"]}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='relative flex flex-wrap w-full gap-5'>
      {centers.map((center, i) => <CenterCard data={center} key={i} /> )}
    </div>
  )
}

export default CenterSelection