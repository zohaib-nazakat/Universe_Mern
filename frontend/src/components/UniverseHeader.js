import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home';

// import ElevatorRoundedIcon from '@material-ui/icons/Eleva';

import {
  AccountBalance,
  CloseRounded,
  EmojiEvents,
  PeopleAltOutlined,
  QuestionAnswerOutlined,
  School,
  Search,

}  from '@material-ui/icons/';
import { Avatar, Button, Input } from '@material-ui/core';
import "./css/UniverseHeader.css";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';

function UniverseHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")
const Close = <CloseRounded />;

const handleSubmit = async ()=> {
if (question !==""){
  const config = {
    headers : {
      "Content-Type": " application/json"
    }
  }
  const body = {
    questionName : question,
    questionUrl : inputUrl
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
          <div className="qHeader__icon"><HomeIcon /></div>
          <div className="qHeader__icon"> <School/> </div>
          <div className="qHeader__icon"><EmojiEvents/></div>
          <div className="qHeader__icon"><AccountBalance/></div>
        
        </div>
     <div className="qHeader__input">
<Search />
<Input type="text" className='search' placeholder="Search questions" />
</div>
<div className='qHeader__Rem'>
{/* ``````` Add our own profile components  ````````````````` */}
<Avatar />


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
<h5>Share Link</h5>
</div>
<div className="modal__info">
<Avatar className="avatar" />
<div className="modal__scope">
<PeopleAltOutlined />
<select>
  <option selected>Public</option>
  <option>Private</option>
</select>
</div>
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
  margin: "5px 0",
  border: "1px solid lightgray",
  padding: "10px",
  outline: "2px solid #000",
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
