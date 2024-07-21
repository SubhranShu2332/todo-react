import React, { useEffect, useRef } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { IconContext } from "react-icons";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Login from './Login';
import { FaFilter } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import TodoDisplay from './TodoDisplay';
import { MdIncompleteCircle } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";


const TodoDashboard = () => {
    const [TodoList, setTodoList] = useState(JSON.parse(localStorage.getItem("list" + localStorage.getItem("status"))) || [])

    const [Task, setTask] = useState("")
    const [Incomplete, setIncomplete] = useState(false)
    const [Complete, setComplete] = useState(false)

    const [Search, setSearch] = useState("")
    let username = localStorage.getItem("status")
    const navigate = useNavigate();
    const handler = () => {
        localStorage.setItem("status", null)
        navigate("/")
    }

    useEffect(() => {
        console.log("In Effect " + TodoList);
        if (localStorage.getItem("list" + localStorage.getItem("status")) != "[]")
            console.log("No");
        localStorage.setItem("list" + localStorage.getItem("status"), JSON.stringify(TodoList))
    }, [TodoList])


    // console.log(username);
    if (username == "null") {
        console.log("null");
        return <Login></Login>
    }
    const addTask = () => {
        if (Task.trim()) {
            console.log(Task);
            const newTask = { task: Task, isCompleted: false };
            setTodoList([...TodoList, newTask]);
            setTask("");
        }
        console.log(TodoList);
    };

    const deleteTodo = (key) => {
        setTodoList(TodoList.filter((_, index) => index !== key));
        console.log(TodoList);
    };

    const updateTask = (val, id) => {
        let updatedList = [...TodoList];
        updatedList[id] = { ...updatedList[id], task: val };
        setTodoList(updatedList);
        console.log(updatedList);
    };
    const inputRef = useRef(null);

    const handleButtonClick = (e) => {
        if (inputRef.current) {
            inputRef.current.focus();
            e.click();
        }
    };

    const toggleCompletion = (id) => {
        let updatedList = [...TodoList];
        updatedList[id] = { ...updatedList[id], isCompleted: !updatedList[id].isCompleted };
        setTodoList(updatedList);
        console.log(updatedList);
    };
    const incompleteTasks = TodoList.filter(item => !item.isCompleted);
    // const completeTasks = TodoList.filter(item => item.isCompleted);

    const SearchList = incompleteTasks.filter(item =>
        item.task.toLowerCase().includes(Search.toLowerCase())
    );
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container fluid>
                        <IconContext.Provider value={{ color: "#ff5c0a", className: "global-class-name", size: '50px' }}>
                            <IoCheckmarkDoneCircle></IoCheckmarkDoneCircle>
                        </IconContext.Provider>
                        <Navbar.Brand >
                            <Link to='/' style={{ color: '#ff5c0a', fontSize: "30px", fontWeight: "bolder", textDecoration: 'none' }}>TodoApp</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ textAlign: "center" }}>
                                    <Navbar.Brand to="/" style={{ color: '#ff5c0a', fontSize: "25px", fontWeight: "bolder", textAlign: 'center' }}>
                                        <Link to='/' style={{ color: '#ff5c0a', fontSize: "25px", fontWeight: "bolder", textDecoration: 'none' }}>TodoApp</Link></Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 navi">



                                    <Link className='btn text-dark mx-3 rounded-0 pe-5 about' style={{ borderRight: "1px solid grey" }} to="/about">About Us</Link>

                                    <input className="form-control w-25 rounded-4 d-none d-sm-block" type="search" placeholder="Search Any Task" value={Search} onChange={(e) => {
                                        setSearch(e.target.value)
                                    }} />

                                    <Link className='btn mx-3 ' style={{ color: "coral" }}  >Welcome , {username}</Link>
                                    
                                    <button className='rounded-4 btn w-100 side-btn mt-2 mb-2 d-sm-block d-md-none' onClick={handleButtonClick} ><FaPlusCircle /> Add Task</button>
                                    <button className='rounded-4 btn w-100 side-btn mb-2 d-sm-block d-md-none' onClick={() => {setIncomplete(false);
                                        onHide()
                                    }} closeButton><FaFilter></FaFilter>  <Offcanvas.Header style={{display:'none'}}closeButton>
        </Offcanvas.Header>All Tasks</button>
                                    <button className='rounded-4 btn w-100 side-btn mb-2 d-sm-block d-md-none' onClick={() => setIncomplete(true)}> <MdIncompleteCircle></MdIncompleteCircle> Incomplete Tasks</button>
                                    {/* <button className='rounded-4 btn w-100 side-btn d-sm-block d-md-none' onClick={() => setIncomplete(true)}> <IoIosCheckmarkCircle></IoIosCheckmarkCircle> Completed Tasks</button> */}
                                    <Link className='btn btn-warning mx-4 rounded-4 log-out' style={{ background: "#ff5c0a", color: 'white' }} onClick={handler} to="/">Log Out</Link
                                    >
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            {/* <div>TodoDashboard</div> */}
            <Sidebar className='d-none d-sm-block bg-body-tertiary rounded-3' style={{ height: "100vh", borderRight: "1px solid bisque" }}>
                <Menu >
                    <button className='rounded-4 btn w-100 side-btn mt-5 mb-2 d-md-block' onClick={handleButtonClick} ><FaPlusCircle /> Add Task</button>
                    <button className='rounded-4 btn w-100 side-btn mb-2 d-md-block' onClick={() => setIncomplete(false)}><FaFilter></FaFilter>  All Tasks</button>
                    <button className='rounded-4 btn w-100 side-btn mb-2 d-md-block' onClick={() => setIncomplete(true)}> <MdIncompleteCircle></MdIncompleteCircle> Incomplete Tasks</button>
                    {/* <button className='rounded-4 btn w-100 side-btn d-md-block' onClick={() => setComplete(true)}> <IoIosCheckmarkCircle></IoIosCheckmarkCircle> Completed Tasks</button> */}

                </Menu>
            </Sidebar>
            <div className='ms-18rem '>

                <div className='fs-1  dash-heading mt-4 '><div class="mx-auto text-center">
                    My To-Do List</div></div>

                <center>
                    <input className="form-control w-75 rounded-4  d-sm-block d-md-none mt-4" type="search" placeholder=" 🔎 Search Any Task" value={Search} onChange={(e) => {
                        setSearch(e.target.value)
                    }} />
                </center>

                <div className=" mt-4 d-flex justify-content-center">
                    <input type="text" className="form-control w-50 d-inline todo-input rounded-pill" value={Task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Your Task' ref={inputRef} />
                    <button className='btn todo-submit rounded-pill py-2 mx-2 btn-outline-success' onClick={addTask}>+Add</button>
                </div>
                <div className="row pt-4">
                    <hr />
                    <div>
                        <ul className='text-decoration-none list-unstyled d-flex  flex-column align-item-center'>
                            {Incomplete == true ? (
                                // <p>Welcome back!</p>
                                incompleteTasks.map((item, i) => (
                                    <TodoDisplay
                                        item={item}
                                        key={i}
                                        index={i}
                                        deleteTodo={deleteTodo}
                                        updateTask={updateTask}
                                        toggleCompletion={toggleCompletion}
                                    />
                                ))
                            ) : Search.length != 0 ?
                                SearchList.map((item, i) => (
                                    <TodoDisplay
                                        item={item}
                                        key={i}
                                        index={i}
                                        deleteTodo={deleteTodo}
                                        updateTask={updateTask}
                                        toggleCompletion={toggleCompletion}
                                    />
                                ))
                                : (
                                    TodoList.map((item, i) => (
                                        <TodoDisplay
                                            item={item}
                                            key={i}
                                            index={i}
                                            deleteTodo={deleteTodo}
                                            updateTask={updateTask}
                                            toggleCompletion={toggleCompletion}
                                        />
                                    ))
                                )}

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoDashboard