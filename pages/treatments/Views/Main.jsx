import React from 'react'
import EmptyStateList from '../../../components/EmptyStateList'

function Main() {

  let list = []

  const DataGrid = () => {
    return(
      <div className="transition relative grid grid-cols-5 grid-rows-[1fr] gap-y-[10px] w-full border-b p-[1%_2.5%] cursor-pointer bg-white hover:bg-slate-200">
        <p className='data-grid-default-data'>Jose Hernandez</p>
        <p className='data-grid-default-data'>ACV32</p>
        <p className='data-grid-default-data'>12/12/2022</p>
        <p className='data-grid-default-data'>12:00</p>
        <p className='data-grid-default-data'>Centro de salud</p>
        <p className='data-grid-default-data'>Dylan Gonzalez</p>
      </div>
    )
  }

  const DataGridLabels = () => {
    return(
      <div className="relative grid grid-cols-6 grid-rows-[1fr] gap-y-[10px] w-full border-b p-[1%_2.5%]">
        <p className='data-grid-label'>Beneficiario</p>
        <p className='data-grid-label'>Nombre</p>
        <p className='data-grid-label'>CURP</p>
        <p className='data-grid-label'>Tratamiento</p>
        <p className='data-grid-label'>Operador</p>
        <p className='data-grid-label'>Fecha</p>
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
          <p className='input-label'>Diagnóstico</p>
          <input className='form-control' type="text" placeholder='Escriba el CURP...'/>
        </div>
        <div className="input-group">
          <p className='input-label'>Unidad Médica</p>
          <select className='form-control'></select>
        </div>
        <div className="input-group">
          <p className='input-label'>Operador</p>
          <select className='form-control'></select>
        </div>
        <div className="input-group">
          <p className='input-label'>Fecha desde</p>
          <input className='form-control' type="date"/>
        </div>
        <div className="input-group">
          <p className='input-label'>Fecha hasta</p>
          <input className='form-control' type="date"/>
        </div>

        <div className="btn btn-primary">Buscar</div>
      </div>

      <DataGridLabels/>
      {list.length === 0 ? <EmptyStateList/> : list.map((prv, i)=> <DataGrid key={i}/> )}
    </div>
  )
}

export default Main
