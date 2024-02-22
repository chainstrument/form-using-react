import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign up</div>
            <div className="unerline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>
        </div>
        <div className="forgot-password">Lost password?<span>Click here</span></div>
        <div className="submit-container">       
            <div className="submit">   Sign up</div>
            <div className="submit">   Login</div>
        </div>
 
    </div>
  )
}


export default LoginSignup