import React from 'react'
// import Nav from './Nav'
import Responsive from './Responsive'
import '../App.css'


// import React from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// // import Navbar from 'react-bootstrap/Navbar';
// import { TfiCheckBox } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
// import Login from './Login';
import Hero from './Hero';


const Home = () => {

  let username=localStorage.getItem("status")
  const handler=()=>{
    localStorage.setItem("status",null)
    navigate("/")
}
  if(username!="null")
  {
    
    return(<>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
              <IconContext.Provider value={{ color: "#ff5c0a", className: "global-class-name", size: '50px' }}>
                  <IoCheckmarkDoneCircle></IoCheckmarkDoneCircle>
              </IconContext.Provider>
              <Navbar.Brand >
                  <Link to='/'  style={{ color: '#ff5c0a', fontSize: "25px", fontWeight: "bolder",textDecoration:'none' }}>TodoApp</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
              >
                  <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}style={{textAlign:"center"}}>
                      <Navbar.Brand to="/" style={{ color: '#ff5c0a', fontSize: "25px", fontWeight: "bolder" ,textAlign:'center'}}>
                      <Link to='/'  style={{ color: '#ff5c0a', fontSize: "25px", fontWeight: "bolder",textDecoration:'none' }}>TodoApp</Link></Navbar.Brand>
                      </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3 navi">
                          <Link className='btn text-dark mx-3 rounded-0 pe-5' style={{borderRight:"1px solid grey"}} to="/about">About Us</Link>
                          <Link className='btn mx-3 ' style={{color: "coral" }}  >Welcome , {username}</Link>
                          <Link className='btn btn-warning mx-4' style={{ background: "#ff5c0a", color: 'white' }} onClick={handler} to="/">Log Out</Link>
                      </Nav>
                  </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
      </Navbar>
  ))}

  <Hero></Hero>
    </>
    )
  }
  else
  return (
    <>
   
    {/* <Navbar></Navbar> */}
    <Responsive></Responsive>
    <Hero></Hero>
    </>
  )
}

export default Home