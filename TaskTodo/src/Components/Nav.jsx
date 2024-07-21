import React from 'react'


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { TfiCheckBox } from "react-icons/tfi";
import { IconContext } from "react-icons";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Responsive from './Responsive';


function Nav() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container style={{marginLeft:"60px"}}>
      <IconContext.Provider value={{ color: "coral", className: "global-class-name", size: '50px' }}>
            <IoCheckmarkDoneCircle></IoCheckmarkDoneCircle>
          </IconContext.Provider>
        <Navbar.Brand href="#home" style={{color:'coral',fontFamily:"Tahoma",fontSize:"25px",fontWeight:"bolder"}}>
          TodoApp</Navbar.Brand>
        <Navbar.Toggle />
        <TfiCheckBox style={{ color: "red", fontWeight: "bold" }}></TfiCheckBox>
        <Navbar.Collapse className="justify-content-end">
          <Link className='btn text-dark mx-3' >About Us</Link>
          <Link  className='btn mx-3 my-2 ' style={{borderColor:'coral',color:"coral"}}  >Login</Link>
          <Link className='btn btn-warning mx-4' style={{background:"coral",color:'white'}}>Start for Free</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Responsive></Responsive>
    </>
  );
}



export default Nav