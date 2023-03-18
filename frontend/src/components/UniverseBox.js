import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import { Button, Input } from '@material-ui/core';
import {
  CloseRounded,
  QuestionAnswerOutlined,

}  from '@material-ui/icons/';
import { useState } from 'react'
// import { useDispatch} from 'react-redux';
import axios from 'axios';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import { logout } from '../feature/userSlice';
import Modal from 'react-responsive-modal';





import './css/UniverseBox.css'
function UniverseBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")
const Close = <CloseRounded />;
// const dispatch = useDispatch();
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

// const handleLogout = () => {
//   if (window.confirm("Are you sure to logout ?")){
//     signOut(auth)
//     .then(() => {
//       dispatch(logout())
//       console.log("logged out");
//     })
//     .catch(() => {
//       console.log("error in logout")
//     })
//   }
// }
  return (
    <div className='quoraBox'>
      <div className='quoraBox__info'>
     <Avatar src = {user?.photo}/>

      <p style={{
        paddingLeft:'20px',
        display:'flex',
        alignItems:'center',


      }}> What do you want to ask or share ?</p>
     
     <Button className='add_question' onClick={() => setIsModalOpen(true)}  style={{marginLeft:'auto' ,color:'white'}}> Add Question <QuestionAnswerOutlined/> </Button>


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
 <h5 style={{marginRight:'10px'}}>Add Question</h5>
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
    <div className="quoraBox__quora">
    
    </div>
    </div>
  )
}

export default UniverseBox
