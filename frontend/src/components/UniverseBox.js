import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/UniverseBox.css'
function UniverseBox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
     <Avatar />
     
    <h5>What is your question or link?</h5>
    </div>
    <div className="quoraBox__quora">
    
    </div>
    </div>
  )
}

export default UniverseBox
