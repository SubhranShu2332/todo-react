import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classNames from 'classnames'; // Import classnames utility
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
// import { MdEdit } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
const TodoDisplay = (props) => {
  const handler = () => {
    props.deleteTodo(props.index)
    console.log("Hello");
  }
  const [show, setShow] = useState(false);
  const [modal, setmodal] = useState("")
  const [index, setindex] = useState(0)
  const [isChecked, setIsChecked] = useState(JSON.parse(props.item.isCompleted));

  const handleCheckboxChange = () => {
    setIsChecked(prevChecked => !prevChecked);
    props.toggleCompletion(props.index)
  };


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(props);
    setmodal(props.item.task)
    setindex(props.index)
  }

  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update The Task</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" className="form-control w-100 d-inline todo-input rounded-pill" value={modal} onChange={(e) => setmodal(e.target.value)} placeholder='Enter Your Task' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={(e) => {
            props.updateTask(modal, index);
            handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <li className='border-bottom ps-3 mt-2'>
        
        <input type="checkbox" name="" id="" className='mb-3' checked={isChecked} 
          onChange={handleCheckboxChange}  /> &ensp;
        <p className={classNames('d-inline-block fs-3 mx-4', { 'strikethrough': isChecked })}>{props.item}</p>
        <button className="btn btn-outline-warning me-4" onClick={(e)=>{handleShow(props.item)}}>Update</button>
        
        <button className="btn btn-outline-danger" onClick={(e) => { props.deleteTodo(props.index) }} style={{}}>Delete</button>
      </li> */}
      <center>
        <li className='border-bottom mt-4 todo-display d-flex justify-space-between w-75 justify-item-center rounded-4 bg-body-tertiary shadow each-todo' style={{ justifyContent: 'space-between' }}>
          <div className=' justfy-content-center'>
          &ensp;
            {isChecked ? (
              <IoIosCheckmarkCircle style={{ color: 'greenyellow', fontSize: "25px" }} checked={isChecked}
                onClick={handleCheckboxChange}></IoIosCheckmarkCircle>) :
              (<IoIosCheckmarkCircleOutline style={{ fontSize: "25px" }}
                checked={isChecked}
                onClick={handleCheckboxChange}></IoIosCheckmarkCircleOutline>)}
                &ensp;&ensp;
            <p className={classNames('d-inline-block fs-3 todo-left', { 'strikethrough': isChecked })}>
              {props.item.task}
            </p>
          </div>


          <div className='right-todo'>
            <button className="btn btn-outline-warning me-4 d-none d-sm-block my-4" onClick={() => handleShow(props.item.task)}>
              Update
            </button>
            <button className="btn me-4 btn btn-outline-danger d-none d-sm-block my-4" onClick={() => props.deleteTodo(props.index)}>
              Delete
            </button>

            <button className="btn  big  d-sm-block d-md-none" onClick={() => handleShow(props.item.task)}>
              <FaEdit style={{
                color: "coral"
              }}></FaEdit>
            </button>
            <button className="btn d-sm-block d-md-none" onClick={() => props.deleteTodo(props.index)}>
              <FaTrash style={{
                color: "red"
              }}></FaTrash>
            </button>
          </div>
        </li>
      </center>

    </>
  )
}

export default TodoDisplay





