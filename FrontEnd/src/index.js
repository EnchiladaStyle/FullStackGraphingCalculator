import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './signIn';
import SignUp from './SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<App/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    
    </BrowserRouter>
    
  </div>

  //
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
