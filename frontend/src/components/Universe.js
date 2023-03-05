import React from 'react'
import Feed from './Feed'
import UniverseHeader from './UniverseHeader'
import './css/Universe.css';


function Universe() {
  return (
    <div className='universe'>
      <UniverseHeader />
      <div className='quora__contents'>
        <div className='quora__content '>
            <Feed />
        </div>
      </div>
    </div>
  )
}

export default Universe
