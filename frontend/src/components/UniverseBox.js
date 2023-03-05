// import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/UniverseBox.css'
import img1 from '../images/img1.jpg';
function UniverseBox() {
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
      {/* <Avatar /> */}
      {/* now we add img from pc  */}
      <img style={{ borderRadius:'50%', width:'47px', height:'47px' }} src={img1} alt='pic' />
    <h5>What is your question or link?</h5>
    </div>
    <div className="quoraBox__quora">
    
    </div>
    </div>
  )
}

export default UniverseBox
