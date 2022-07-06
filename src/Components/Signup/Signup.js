import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      console.log(result.user._delegate.uid);
      result.user.updateProfile({ displayName: userName }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user._delegate.uid,
          userName: userName,
          phone: phone
        }).then(() => {
          navigate('/login');

        })
      })
    }).catch((error)=>{
      alert( error.message );
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => {
          navigate('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
