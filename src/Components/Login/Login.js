import React ,{useState,useContext}from 'react';
import { FirebaseContext } from '../../store/Context';

import Logo from '../../olx-logo.png';
import './Login.css';
import {useNavigate} from "react-router-dom";


function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {firebase}=useContext(FirebaseContext);
  const navigate=useNavigate();

  const handellogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
          navigate("/sellme")
    }).catch((error)=>{
      alert(error.message);
    }).catch((error)=>{
      alert( error.message );
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handellogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{
              setemail(e.target.value);
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value);
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a style={{cursor:"pointer"}} onClick={()=>{
          navigate('/signup')
        }}>Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
