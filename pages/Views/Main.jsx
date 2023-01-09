import React from 'react'
import useAuth from '../../lib/hooks/useAuth'
import DoctorsCase from './DoctorsCase'
import OperatorsCase from './OperatorsCase'

function Main() {

  const {userRole} = useAuth()

  return (
    <div className='block relative w-full'>
      {userRole === 1 && <DoctorsCase/>}
      {userRole === 2 && <OperatorsCase/>}
    </div>
  )
}

export default Main