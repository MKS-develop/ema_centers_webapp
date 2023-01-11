import React from 'react'
import useMedicalRecordForm from '../../../../../../lib/hooks/useMedicalRecordForm'
import GeneralInquiry from './GeneralInquiry'
import PrenatalCare from './PrenatalCare'
import Puerperium from './Puerperium'
import ChildHealth from './ChildHealth'
import CancerInMinors from './CancerInMinors'
import AcuteDiarrhealDiseases from './AcuteDiarrhealDiseases'
import OtherEvents from './OtherEvents'
import AcuteRespiratoryInfections from './AcuteRespiratoryInfections'
import AccidentPrevention from './AccidentPrevention'
import GerontologicalInterventions from './GerontologicalInterventions'
import HealthPromotion from './HealthPromotion'
import ReferenceAndCounterReference from './ReferenceAndCounterReference'
import Telemedicine from './Telemedicine'

function Form() {

    const { activeForm } = useMedicalRecordForm()

    return (
        <>
            { activeForm === 0 && <GeneralInquiry/> }
            { activeForm === 1 && <PrenatalCare/> }
            { activeForm === 2 && <Puerperium/> }
            { activeForm === 3 && <OtherEvents/> }
            { activeForm === 4 && <ChildHealth/> }
            { activeForm === 5 && <CancerInMinors/> }
            { activeForm === 6 && <AcuteDiarrhealDiseases/> }
            { activeForm === 7 && <AcuteRespiratoryInfections/> }
            { activeForm === 8 && <AccidentPrevention/> }
            { activeForm === 9 && <GerontologicalInterventions/> }
            { activeForm === 10 && <HealthPromotion/> }
            { activeForm === 11 && <ReferenceAndCounterReference/> }
            { activeForm === 12 && <Telemedicine/> }
        </>
    )
}

export default Form
 