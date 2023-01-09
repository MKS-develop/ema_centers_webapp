import Link from 'next/link'
import React from 'react'
import EmptyStateList from '../../../components/EmptyStateList'

function Main() {

  let list = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]

  const DataGrid = () => {
    return(
      <Link
        href={{
          pathname: '/patients/patient',
          query: {patient_id: "ACV32JH"}
        }}
        className="transition relative grid grid-cols-7 grid-rows-[1fr] gap-y-[10px] w-full border-b p-[1%_2.5%] cursor-pointer bg-white hover:bg-slate-200">
        <p className='data-grid-default-data'>Jose Hernandez</p>
        <p className='data-grid-default-data'>ACV32</p>
        <p className='data-grid-default-data'>12/12/2022</p>
        <p className='data-grid-default-data'>12:00</p>
        <p className='data-grid-default-data'>Centro de salud</p>
        <p className='data-grid-default-data'>Dylan Gonzalez</p>
        <div className='w-full flex justify-start items-center gap-2'>
          <span className='rounded-full w-[12px] h-[12px] bg-success'></span>
          <p className='text-sm font-medium text-slate-900'>Activo</p>
        </div>
      </Link>
    )
  }

  const DataGridLabels = () => {
    return(
      <div className="relative grid grid-cols-7 grid-rows-[1fr] gap-y-[10px] w-full border-b p-[1%_2.5%]">
        <p className='data-grid-label'>Paciente</p>
        <p className='data-grid-label'>CURP</p>
        <p className='data-grid-label'>Fecha</p>
        <p className='data-grid-label'>Hora</p>
        <p className='data-grid-label'>Unidad Médica</p>
        <p className='data-grid-label'>Operador</p>
        <p className='data-grid-label'>Estatus</p>
      </div>
    )
  }

  return (
    <div className='block relative w-full'>
      <div className="flex justify-start items-end flex-wrap gap-4 p-[2.5%]">
        <div className="input-group">
          <p className='input-label'>Nombre del paciente</p>
          <input className='form-control' type="text" placeholder='Escriba el nombre...'/>
        </div>
        <div className="input-group">
          <p className='input-label'>CURP</p>
          <input className='form-control' type="text" placeholder='Escriba el CURP...'/>
        </div>
        <div className="btn btn-primary">Buscar</div>
      </div>

      <DataGridLabels/>
      {list.length === 0 ? <EmptyStateList/> : list.map((prv, i)=> <DataGrid key={i}/> )}
    </div>
  )
}

export default Main
