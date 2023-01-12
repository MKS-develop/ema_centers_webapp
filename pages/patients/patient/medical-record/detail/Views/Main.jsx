import React, { useState } from 'react'
import Detail from './Detail'

function Main() {

    let listOfLinks = [
        {index: 0, title: "Detalle general"},
        {index: 0, title: "Tratamientos"},
    ]

    return (
        <div className="relative w-full h-[82vh] flex jusfity-between items-start bg-slate-100">
            <div className="w-[75%] h-full p-[2%] overflow-hidden overflow-y-auto">
                <div className="w-full h-fit p-[3%_3%_0%_3%] bg-white rounded-md shadow-sm">
                    <Detail/>
                </div>
            </div>
        </div>
    )
}

export default Main