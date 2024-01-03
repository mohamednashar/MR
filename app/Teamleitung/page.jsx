import React from 'react'
import CardTeamleitung from '../components/CardTeamleitung'
import TeamleitungButton from '../components/TeamleitungButton'

const page = () => {
  return (
    <div>
        <CardTeamleitung/>
        <div className='mt-8 '>
        <TeamleitungButton/>
        </div>
    </div>
  )
}

export default page