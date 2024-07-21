import React, { useCallback, useState } from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'
import Nav from './Nav'
import Responsive from './Responsive'
import LoginTemplate from './LoginTemplate'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    // const [status, setstatus] = useState("second")
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(localStorage.getItem(username)===password)
        {
          navigate("/dashboard");
          localStorage.setItem("status",username)
        }
        else navigate("/login")
        
    
    }

  return (
    <>
    <Responsive></Responsive>
    <div className="container2 mx-5 px-5 rounded-3">
        <div className="hero mx-6 row">
          <div className="col-md-5 h2">
            
          </div>
                     
            <div className="col-md-7">
                    <div className='m-5 ps-3'>
                      <p className='login-right-1'>We are <b>Login</b></p>
                      <p className="login-right-2 mb-4"style={{color:"grey"}}> Welcome back! Log in to your account.</p>
                    <input className='login-input px-2 rounded-3 form-control' type="text" name="name" id="name" placeholder='Username' onChange={(e)=>setusername(e.target.value)} value={username}/> <br />
                    <input className='login-input px-2 rounded-3 form-control' type="password" name="password" id="password" placeholder='Password' value={password}  onChange={(e)=>setpassword(e.target.value)} />
                    <br />
                    <input className=" btn btn-outline-success mt-4 rounded-pill login-button"type=" submit" onClick={handlesubmit} value="Login"/>
                    </div>
            </div>
        </div>
    </div>
    {/* <LoginTemplate></LoginTemplate> */}
    </>
  )
}

export default Login