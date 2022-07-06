import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { Storage } from '../../firebase/Config';

const Create = () => {
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const {firebase}=useContext(FirebaseContext);
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  const date=new Date();
  const home=()=>{ navigate('/sellme')}
  const handelsubmit=()=>{
    console.log("hello");
    Storage.ref(`/Img/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url);
        // firebase.firestore().collection('users').add({
        //   id:result.user._delegate.uid,
        //   userName:userName,
        //   phone:phone
        // })

        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid ,
          createdAt:date.toDateString()
        })
      })
    })
   

  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{
                setcategory(e.target.value)
              }}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"
            value={price}
            onChange={(e)=>{
              setprice(e.target.value)
            }}
            id="fname" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px"height="200px" src={image?URL.createObjectURL(image):''}></img>
         
            <br />
            <input 
            onChange={(e)=>{
              setimage(e.target.files[0])
            }}
            type="file" />
            <br />
            <button onClick={handelsubmit} className="uploadBtn">upload and Submit</button>
          
          <button className="uploadBtn" onClick={ home}>home</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
