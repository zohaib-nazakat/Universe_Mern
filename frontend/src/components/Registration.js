import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import loginpic from "../../src/img2.png";
import './css/Registration.css';
// import Login_link from './Login';

const Login=()=>{
    const [passwordShown,setPasswordShown]=useState(false);
    const togglePassword=()=>{
        setPasswordShown(!passwordShown);
    }
    return (
        <>
        <div className="container-f container-fluid">
            <div className="container">
                    <div className="row bunny">   
                        <div className="col-lg-6 second_part ">
                            <h3 className='sec_h1'>Sign Up </h3>
                            <form action="#" className='singnupform ms-sm-auto mb-5'>
                                <input type="text" name="fname" id="set" placeholder='First Name' required/>
                                <input type="text" name="lname" id="set" placeholder='Last Name' required/>
                                <input type="text" name="uname" id="set" placeholder='User Name' required/>
                                <input type="email" name="Email" id="email" placeholder='Email Address' required/>
                                <input type="number" name="phone" id="set" placeholder='Phone Number' />
                                <div className='wrapper'>
                                <input type={passwordShown ? 'text' : 'password'} name="password" id="password" placeholder='Password' required/>
                                <i onClick={togglePassword} className='fa fa-eye fa-eye-margin' aria-hidden='true' id='eye' ></i>
                                </div>
                                <br />
                                {/* <input type="Password" name="password" id="password" placeholder='Re-type Password' /> */}
                                {/* <br /> */}
                                <button type="submit" id='btn1'>Register </button>
                                <div className='sign_link'>
                                    {/* <span><a href="...">Already Have an <strong>Account ?</strong></a></span> */}
                                    <span><Link to='/Login'> Already Have an <strong>Account?</strong></Link></span>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col1" id='lg_head'>
                            <div >
                            <picture className='picregis'>
                                <img src={loginpic} alt="LoginPic" />

                             </picture>
                             {/* <h1>Welcome Login Page</h1> */}
                            </div> 
                        </div>

                    </div>
                
            </div>
        </div>
        </>
    );
}
export default Login;