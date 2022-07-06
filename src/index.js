import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from "./store/Context";
import firebase from "./firebase/Config";
import Context from './store/Context';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

<FirebaseContext.Provider value={{firebase}}>
    <BrowserRouter>
        <Context>
        <App/>
    </Context>
    
    </BrowserRouter>

  </FirebaseContext.Provider>
    
  </React.StrictMode>
  

  

);



