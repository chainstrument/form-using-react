import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction] = useState("sign up ")



  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="unerline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="name" />
            </div>
            <div className="input">
                <img src={email_icon} alt=""  />
                <input type="email" placeholder="email id" />
            </div>
            <div className="input">
                <img src={password_icon} alt=""  />
                <input type="password" placeholde="password" />
            </div>
        </div>
        <div className="forgot-password">Lost password?<span>Click here</span></div>
        <div className="submit-container">       
            <div className={action === "Login" ? "submit gray" : "submit"}>   Sign up</div>
            <div className={action === "Sign up" ? "submit gray" : "submit"}>   Login</div>
        </div>
 
    </div>
  )
}


export default LoginSignup