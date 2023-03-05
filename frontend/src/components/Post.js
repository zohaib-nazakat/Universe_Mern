import React, { useState } from 'react'
import './css/Post.css';
import { Avatar } from '@material-ui/core';
import CloseRounded from '@material-ui/icons/CloseRounded';
import {  Comment, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import img2 from '../images/img2.jpg';

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseRounded />;
  return (
    <div className='post'>
      <div className='post__info'>

        {/* <Avatar /> */}
              {/* now we add img from pc  */}
      {/* now we add img from pc  */}
        <img style={{ borderRadius:'50%', width:'47px', height:'47px' }} src={img2} alt='pic' />
        {/* mai khud usert add kita ee  */}
        <h4>Muhammad Zohaib</h4>
        <small>12:20</small>
      </div>
          <div className="post__body">
          <div className='post__question'>
              <p>
                  This is test question
              </p>
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
  <h1>this is test question.</h1>
  <p>asked by {" "}<span className='name'>Username </span>
on <span className='name'> timestamp </span> </p></div>  
      <div className='modal__answer'>
        <ReactQuill placeholder="enter your answer"/>
      </div>
      <div className='modal__button'><button type='submit' className = 'add' >
Add Answer
</button>
<button className = 'cancle' onClick = {() => setIsModalOpen (false) } >
Cancel
</button>
</div>
</Modal>
      </div>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ThumbUpAlt />
          <ThumbDownAlt />
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
          margin:"10px 0",
        }}
        >
        1 Answer
        </p>
<div 
style={{
  margin:"5px 0px 0px 0px",
  padding:"5px 0px 0px 20px",
  borderTop:"1px solid lightgray",
}}
className="post_answer">

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
<Avatar />
<div
style={{
  margin:"0px 10px",
}}
 className="post__info">
<p>Username</p>
<span>Timestamp</span>
</div>
</div>
<div className='post__answer'>This is test answer</div>
    </div>
    </div>
    </div>
    
  );
}

export default Post;
