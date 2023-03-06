import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import { selectUser, login } from './feature/userSlice';
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Feed from './components/Feed';
import UniverseHeader from './components/UniverseHeader';
import NoticeBoard from './components/NoticeBoard';
import LeaderBoard from './components/LeaderBoard';
import Bscs from './components/Bscs.js'
import Bba from './components/Bba.js'
import Bcom from './components/Bcom.js'
import Law from './components/Law.js'
import AboutUs from './components/AboutUs.js';


function App() {
  const user = useSelector(selectUser)
  const dispatch= useDispatch()
  useEffect (() => {
    onAuthStateChanged (auth, (authUser) => {
    if (authUser) {
    dispatch(
      login ({
    userName: authUser.displayName,
    photo: authUser.photoURL,
    email: authUser.email,
    uid: authUser.uid,
    })
    );
    console.log("AuthUser", authUser);
    }
    });
    }, [dispatch]);
  return (
    <div className="App">
      {/* <h1>This is for testing</h1> */}

      {/* ````````````` Enable it ``````` */}

      <BrowserRouter>
      {user ? <UniverseHeader /> : <Login />}
          {/* <UniverseHeader/> */}
        <Routes>
          <Route exact path='/' element={<Feed/>}></Route>  
          <Route path='/NoticeBoard' element={<NoticeBoard/>}></Route> 
          <Route path='/LeaderBoard' element={<LeaderBoard/>}></Route> 
          <Route path='/Bscs' element={<Bscs/>}></Route> 
          <Route path='/Bba' element={<Bba/>}></Route> 
          <Route path='/Bcom' element={<Bcom/>}></Route> 
          <Route path='/Law' element={<Law/>}></Route> 
          <Route path='/AboutUs' element={<AboutUs/>}></Route> 
        </Routes>
        </BrowserRouter>
    

      
    </div>
  );
}

export default App;
