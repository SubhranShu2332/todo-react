import React from 'react'
import back from '../assets/bg6.jpg'
import { useNavigate } from 'react-router-dom'
import TodoDashboard from './TodoDashboard'
import Register from './Register'

const Hero = () => {
  const navigate = useNavigate();

  let username = localStorage.getItem("status")
  const handler = () => {
    console.log(username);
    if (username != null) {
      // navigate("/dashboard")
      console.log("not null")
      navigate("/dashboard")
      return <TodoDashboard></TodoDashboard>
    }
    else {
      
      console.log("null");
      navigate("/register")
      return <Register></Register>
    }
  }
  return (
    <>
      {/* <div>Hero</div> */}
      <h1 className='container text-center  hero-text'>Organize your work <br />and life, finally.</h1>
      <h5 className='text-center hero-sub-text'>
        Simplify life for both you and your team. The world's #1 task<br /> manager and to-do list app.
      </h5>

      <div className='d-flex justify-content-center mt-4'>
        <button className="btn" style={{ background: "#ff5c0a", color: 'white' }} onClick={handler}>Get Started</button>
      </div>

      
    </>
  )
}

export default Hero