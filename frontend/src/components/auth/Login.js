import React , {useState} from 'react';
import loginpic from "../../images/login.png";
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login=()=>{
    const [passwordShown,setPasswordShown]=useState(false);
    const togglePassword=()=>{
        setPasswordShown(!passwordShown);
    }






    // let state=false;
    // function toggle(){
    // if(state){
    //     document.getElementById("password").setAttribute("type","password");
    //     state=false;
    // }
    // else{
    //     document.getElementById("password").setAttribute("type","text");
    //     state=true;
    // }
    // }



    return (
        <>
        <div className="container-f container-fluid">
            <div className="container">
                    <div className="row shadow">
                        
                        <div className="col-lg-6 col1" id='lg_head'>
                            <div >
                            <picture className='pic'>
                                <img src={loginpic} alt="LoginPic" />

                             </picture>
                             {/* <h1>Welcome Login Page</h1> */}
                            </div> 
                        </div>
                        <div className="col-lg-6 second-part ">
                            <h3 className='sec_h1'>Sign In</h3>
                            <form action="#" className='singnupform mb-1 '>
                                <input type="email" name="Email" id="email" placeholder='Email Address' required/>
                                <br />
                                <div className='wrapper'>
                                <input type={passwordShown ? 'text' : 'password'} name="password" id="password" placeholder='Password' required/>
                                <i onClick={togglePassword} className='fa fa-eye fa-eye-margin' aria-hidden='true' id='eye' ></i>
                                </div>
                                <button type="submit" id='btn'>Login </button>
                                <div className='sign_link'>
                                    {/* <span><a href="...">Already Have an <strong>Account ?</strong></a></span> */}
                                        <span><Link to='/Registration'> Don't Have an <strong>Account?</strong></Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                
            </div>
        </div>
        </>
    );
}
export default Login;