import React from 'react'
import useAttention from '../../../../../lib/hooks/useAttention'
import GeneralInquiry from './GeneralInquiry'

function Form() {

    const { activeForm } = useAttention()

    return (
        <>
            { activeForm === 0 && <GeneralInquiry/> }
        </>
    )
}

export default Form