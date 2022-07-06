import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import ViewPost from "./Pages/ViewPost"


import { AuthContext, FirebaseContext } from './store/Context';
import Post from "./store/PostContext"



function App() {
  const { setUser } = useContext(AuthContext);
  const {firebase}=useContext(FirebaseContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    
    <div >
      <Post>
      <Routes>
        
        <Route exact path='/sellme' element={<Home />} />
        <Route path='/view' element={< ViewPost/>} />
       
       
        <Route path='/Signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
     
      </Routes>
      </Post>  
    </div>
  );
}

export default App;
