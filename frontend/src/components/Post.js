import React, { useState } from 'react'
import './css/Post.css';
import { Avatar } from '@material-ui/core';
import CloseRounded from '@material-ui/icons/CloseRounded';
import {  Comment,  } from '@material-ui/icons';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser'
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/userSlice';
import LikeDislikeButtons from './LikeButton';

function LastSeen({ date }) {
  return (
    <div>
    <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}


function Post({post}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("")
  const Close = <CloseRounded />;
  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value)
  }
  // console.log(answer)

const handleSubmit = async() => {
  if(post?._id && answer !==  ""){
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const body = {
      answer: answer,
      questionId: post?._id,
      user : user,
    }
    await axios.post('/api/answers', body,config).then((res) => {
      console.log(res.data)
      alert('Answer added successfully')
      window.location.href = '/'
    }).catch((e) => {
      console.log(e)
    })
  }
}  
  return (
    <div className='post'>
      <div className='post__info'>
        <Avatar src={post?.user?.photo}/>
             
        <h4>{post?.user?.userName}</h4>
      
       <small><LastSeen date={post?.createdAt}/></small>
      </div>
          <div className="post__body">
          <div className='post__question'>
              <p>
                  Q: {post?.questionName}
              </p>
              {/* <button
onClick={() => {
setIsModalOpen(true)
console.log(post?._id);
}}
className="post__btnAnswer"
>
Answer
</button>  */}

              {/* //////////////// answer/////////// */}
<Modal
open={isModalOpen}
closeIcon={Close}
onClose={() => setIsModalOpen (false) }
closeOn Esc
center
closeOnOverlayClick={false}
styles={{
overlay: {
height: "auto",
},
}}
>
<div className='modal__question'>
  <h1>{post?.questionName}</h1>
  <p>asked by {" "}<span className='name'>{post?.user?.userName}</span>
on <span className='name'> {new Date(post?.createdAt).toLocaleString()}</span> </p></div>  
      <div className='modal__answer'>
        <ReactQuill value = {answer} onChange ={handleQuill} placeholder="enter your answer"/>
      </div>
      <div className='modal__button'><button onClick = {handleSubmit} type='submit' className = 'add' >
Add Answer
</button>
<button className = 'cancle' onClick = {() => setIsModalOpen (false) } >
Cancel
</button>
</div>
</Modal>
      </div>
      
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}

      </div>
      <div className="post__footer">
        <div className="post__footerAction" style={{marginLeft:'45px'}}>
          {/* <ThumbUpAlt />
          <ThumbDownAlt /> */}
          <LikeDislikeButtons/>
          <div className='post__question'>
          <button onClick={() => setIsModalOpen (true)}
          className="post__btnAnswer">
           <span className='comment_icon'><Comment/></span>  Comment
          </button>
          </div>
        </div>
          
        </div>
        <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight:"bold",
          margin:"10px 50px",
          
        }}
        >
        {post?.allAnswers.length} Answer(s)
        </p>
<div 
style={{
  margin:"5px 0px 0px 25px",
  padding:"5px 0px 0px 20px",
  borderTop:"1px solid lightgray",
  
}}
className="post_answer">
  


{
  post?.allAnswers?.map((_a) => (<>
    <div 
style={{
  display:"flex",
  flexDirection:"column",
  width:"100%",
  padding:"10px 5px",
  borderTop:"1px solid lightgray",
}}
className="post-answer-container">
    <div
style={{
  display:"flex",
  alignItems:"center",
  marginBottom:"10px",
  fontSize:"12px",
  fontWeight:600,
  color:"#888", 
}}
 className="post__answered">
<Avatar src = {_a?.user?.photo}/>
<div
style={{
  margin:"0px 10px",
}}
 className="post__info">
<p>{_a?.user?.userName}</p>
<span><LastSeen date = {_a?.createdAt} /></span>
</div>
</div>
<div className='post__answer'>{ReactHtmlParser(_a?.answer)}</div>
</div>
  </> ))
}

    </div>
    </div>
    
  );
}

export default Post;
