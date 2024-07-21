import React, { useCallback, useState } from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'
import Responsive from './Responsive'


const Register = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        if(username.length!=0 && password.length!=0)
        {
          e.preventDefault();
        localStorage.setItem(username,password);
        navigate("/login");
        }
    
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
                      <p className='login-right-1'><b>New User ??</b></p>
                      <p className="login-right-2 mb-5" style={{color:"grey"}}>Create Your Account</p>
                    <input className='login-input  px-2 rounded-3 form-control' type="text" name="name" id="name" placeholder=' Username' onChange={(e)=>setusername(e.target.value)} value={username}/> <br />
                    <input className='login-input  px-2 rounded-3 form-control' type="password" name="password" id="password" placeholder=' Password' value={password}  onChange={(e)=>setpassword(e.target.value)} />
                    <br />
                    <input className=" btn btn-outline-success mt-4 rounded-pill login-button"type=" submit" onClick={handlesubmit} value="Sign Up"/>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register