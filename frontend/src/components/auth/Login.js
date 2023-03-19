




import { signInWithPopup } from 'firebase/auth';
import "../css/Login.css";
import { auth, provider , fbprovider} from "../../firebase";
import React , {useState} from 'react';
import loginpic from "../../images/login.png";
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';

     function Login() {
          const handleSubmit = async () => {
            await signInWithPopup (auth, provider)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
               });
          };
        
          const handleSubmitfb = async () => {
            await signInWithPopup (auth, fbprovider)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              });
          };

const [passwordShown,setPasswordShown]=useState(false);
     const togglePassword=()=>{
         setPasswordShown(!passwordShown);
     }
   return (
     <>    


     <>
          <div className="container-f container-fluid" >
              <div className="container" >
                     <div className="row shadow" >
                        
                          <div className="col-lg-6 col1" id='lg_head' >
                              <div >
                             <picture className='pic'>
                                  <img src={loginpic} alt="LoginPic" />

                              </picture>                               {/* <h1>Welcome Login Page</h1> */}
                             </div> 
                         </div>                          <div className="col-lg-6 second-part ">
                             
                             <h1 style={{color:'#009696',marginTop:'100px',marginLeft:'140px'}}>Join Universe</h1>  

                             <h4 className='sec_h1'>Sign In with:</h4>                            
                          
                               <form action="#" className='singnupform mb-1 '>                          
                                 <br />
                                
                                
                                 <button onClick = {handleSubmit} className="btn-login" style={{marginLeft:"135px", marginTop:'0px', width:'210px', backgroundColor:'#009696', color:'white',border:'none',padding:'10px',borderRadius:'20px',marginBottom:'10px'}}>   
                                  <span style={{paddingRight:'5px'}}><i class="fa-brands fa-google"></i></span> Continue With Google</button>


                                  <button onClick = {handleSubmitfb} className="btn-login" style={{marginLeft:"135px", marginTop:'0px', width:'210px', backgroundColor:'#009696', color:'white',border:'none',padding:'10px',borderRadius:'20px',marginBottom:'10px'}}>   
                                  <GitHub style={{marginRight:'5px',height:"20px"}}/> Continue With GitHub</button>


                                  


                              </form>
                          </div>
                      </div>
                
              </div>
          </div>
          </>
     </>
   );
 }

 export default Login;
