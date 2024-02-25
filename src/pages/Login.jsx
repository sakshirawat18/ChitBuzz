import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Register.css"

const Login = () => {
  return (
    <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">ChitBuzz</span>
                <span className="title">Login</span>
                <form className='form'>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign in</button>
                </form>
                <p>Don't have an account? <Link to="register">Register</Link></p>
            </div>
        </div>
  )
}

export default Login
