import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { IconContext } from "react-icons";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import Responsive from './Responsive';
import '../App.css'
function Responsive(props) {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <IconContext.Provider value={{ color: "#ff5c0a", size: '50px' }}>
                            <IoCheckmarkDoneCircle></IoCheckmarkDoneCircle>
                        </IconContext.Provider>
                        <Navbar.Brand >
                            <Link to='/'  style={{ color: '#ff5c0a',  fontSize: "25px", fontWeight: "bolder",textDecoration:'none' }}>TodoApp</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}style={{textAlign:"center"}}>
                                <Navbar.Brand to="/" style={{ color: 'coral', fontFamily: "Tahoma", fontSize: "25px", fontWeight: "bolder" ,textAlign:'center'}}>
                                <Link to='/'  style={{ color: '#ff5c0a', fontFamily: "Tahoma", fontSize: "25px", fontWeight: "bolder",textDecoration:'none' }}>TodoApp</Link></Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 navi">
                                    <Link className='btn text-dark mx-3' to="/about">About Us</Link>
                                    <Link className='btn mx-3 ' style={{color: "#ff5c0a" }}  to="/login">Login</Link>
                                    <Link className='btn btn-warning mx-4' style={{ background: "#ff5c0a", color: 'white' }} to="/register">Start for Free</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Responsive;