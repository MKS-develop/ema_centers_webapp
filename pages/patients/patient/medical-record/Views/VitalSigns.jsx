import React from 'react'

function VitalSigns() {
    return (
        <div className='flex flex-col items-start w-full h-full'>
            <p className="w-full border-b text-left font-semibold text-lg text-slate-900 pb-2">Signos vitales</p>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Peso</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Talla</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Frecuencia cardiaca</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Frecuencia respiratoria</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Temperatura</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
            <div className="input-group-flex justify-between items-center gap-5 w-full py-2">
                <p className='font-light text-sm text-slate-500'>Circunferencia cintura</p>
                <p className='font-semibold text-[14px] p-[1%_1.5%] bg-secondary/30 rounded text-secondary'>1,78cm</p>
            </div>
        </div>
    )
}

export default VitalSigns