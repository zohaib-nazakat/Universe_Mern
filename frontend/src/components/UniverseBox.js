import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';

import './css/UniverseBox.css'
function UniverseBox() {
  const user = useSelector(selectUser);
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
     <Avatar src = {user?.photo}/>
     
    <h5>What is your question or link?</h5>
    </div>
    <div className="quoraBox__quora">
    
    </div>
    </div>
  )
}

export default UniverseBox
