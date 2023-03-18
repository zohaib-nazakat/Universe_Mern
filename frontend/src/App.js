import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import Login from './components/Login';
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
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';

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
        <BrowserRouter>
          {user ? (
            <>
              <UniverseHeader />
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/Registration" element={<Registration />} />
                <Route exact path="/NoticeBoard" element={<NoticeBoard />} />
                <Route path="/LeaderBoard" element={<LeaderBoard />} />
                <Route path="/Bscs" element={<Bscs />} />
                <Route path="/Bba" element={<Bba />} />
                <Route path="/Bcom" element={<Bcom />} />
                <Route path="/Law" element={<Law />} />
                <Route path="/AboutUs" element={<AboutUs />} />
              </Routes>
            </>
          ) : (
            <Login />
          )}
        </BrowserRouter>
      </div>
    );
    }

export default App;
