import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import Zohaib from './Zohaib.js';

// import ElevatorRoundedIcon from '@material-ui/icons/Eleva';

import {
  CloseRounded,
  EmojiEvents,
  QuestionAnswerOutlined,
  School,

}  from '@material-ui/icons/';
import { Avatar, Button, Input } from '@material-ui/core';
import "./css/UniverseHeader.css";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Feed from './Feed.js';
function UniverseHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")
const Close = <CloseRounded />;
const dispatch = useDispatch();
const user = useSelector(selectUser)

const handleSubmit = async ()=> {
if (question !==""){
  const config = {
    headers : {
      "Content-Type": " application/json"
    }
  }
  const body = {
    questionName : question,
    questionUrl : inputUrl,
    user : user
  }
  await axios.post('/api/questions' , body, config).then((res)=> {
    console.log(res.data);
    alert(res.data.message);
    window.location.href = '/';

  }).catch((e) => {
    console.log(e)
    alert('Error adding question')
  })
}
}

const handleLogout = () => {
  if (window.confirm("Are you sure to logout ?")){
    signOut(auth)
    .then(() => {
      dispatch(logout())
      console.log("logged out");
    })
    .catch(() => {
      console.log("error in logout")
    })
  }
}
  return (
  <div className='qheader'>
    <div className='qHeader-content'>
    <div className='qHeader__logo'>
       {/* <img
       src="https://video-public.canva.com/VAD81t3jPyI/v/ec7205f25c.gif"
alt="logo"/> */}
</div>
        <div className="qHeader__icons">
        <h3 className='header__icon'>Universe</h3>
         <Link to='/'> <div className="qHeader__icon"><HomeIcon /></div> </Link>
         <Link to='/NoticeBoard'> <div className="qHeader__icon"> <School/> </div></Link>
         <Link to='/LeaderBoard'> <div className="qHeader__icon"><EmojiEvents/></div> </Link>
          {/* <div className="qHeader__icon"><AccountBalance/></div> */}
          {/* <ul>
          <select className='dropDown'>
            <option>User3</option>
            <option>User1</option>
          </select>
          </ul> */}
           
          <Zohaib/>

          
        
        </div>
    
<div className='qHeader__Rem'>
{/* ``````` Add our own profile components  ````````````````` */}

<span onClick={handleLogout}><Avatar src = {user?.photo}/></span>



<Button className='add_question' onClick={() => setIsModalOpen(true)} > Add Question <QuestionAnswerOutlined/> </Button>


     <Modal open = {isModalOpen}
     CloseRounded = {Close}
     onClose ={() => setIsModalOpen(false)}
     closeOnEsc
center
closeOnOverlayClick={false}
styles={{
overlay: {
height: "auto",
},
}}
     >
      <div className='modal__title'> 
      <h5>Add Question</h5>
</div>
<div className="modal__info">
<Avatar src = {user?.photo} className="avatar" />
{/* <div className="modal__scope">
<PeopleAltOutlined />
<select>
  <option selected>Public</option>
  <option>Private</option>
</select>
</div> */}
</div>
     <div className="modal__Field">
<Input
value = {question}
onChange = {(e) => setQuestion(e.target.value)}
 type="text" placeholder="Start your question with 'What', 'How', 'Why', etc. " />
<div style={{
display: "flex",
flexDirection: "column",
color:'black'
}}>
<input type = 'text' 
value={inputUrl}
onChange={(e) => setInputUrl(e.target.value)}
style={{
  margin: "10px 0",
  border: "1px solid lightgray",
  padding: "10px",
  // outline: "2px solid #000",
}}
placeholder="Optional: inclue a link that gives context" />
{inputUrl !== "" && (
<img
style={{
height: "40vh",
objectFit: "contain",
}}
src={inputUrl}
alt="displayimage"
/>
)}
</div>
</div>
<div className='modal__button'>
<button onClick={handleSubmit} type='submit' className = 'add' >
Add Question
</button>
<button className = 'modal__buttons' onClick = {() => setIsModalOpen (false) } >
Cancel
</button>

</div>
     </Modal>
     </div>
     </div>
     </div>
  )
}

export default UniverseHeader
