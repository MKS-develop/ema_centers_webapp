import React, { useState } from 'react'
import useMedicalRecord from '../../../../../lib/hooks/useMedicalRecord'
import VitalSigns from './VitalSigns'
import ClientInfo from './ClientInfo'
import Treatments from './Treatments'
import History from './History'

function Main() {

    const {} = useMedicalRecord()

    return (
        <div className="relative w-full h-[82vh] flex flex-col jusfity-start items-center p-4 gap-4 bg-slate-100">
            {/* Start Top Row */}
            <div className="h-[48.5%] w-full flex justify-between items-center gap-4">
                <div className="w-[65%] h-full bg-white rounded-md shadow-sm p-[1.7%] overflow-hidden">
                    <ClientInfo/>
                </div>
                <div className="w-[35%] h-full bg-white rounded-md shadow-sm p-[1.7%] overflow-hidden">
                    <VitalSigns/>
                </div>
            </div>
            {/* End Top Row */}
            {/* Start Bottom Row */}
            <div className="h-[48.5%] w-full flex justify-between items-center gap-4">
                <div className="w-[65%] h-full bg-white rounded-md shadow-sm p-[1.7%] overflow-hidden">
                    <History/>
                </div>
                <div className="w-[35%] h-full bg-white rounded-md shadow-sm p-[1.7%] overflow-hidden">
                    <Treatments/>
                </div>
            </div>
            {/* End Bottom Row */}
        </div>
    )
}

export default Main