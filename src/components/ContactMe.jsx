import React from 'react'
import contact from '../assets/contact.png'
import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import { showToast } from './ShowToast';

function ContactMe() {
  const [show, setShow] = useState(false);
  const form = useRef();  
  const handleClose = () =>{
    setShow(false);
    setErr({});
  } 
  const handleShow = () =>{
    setShow(true);
    setErr({});
  } 
  const [fromData,setFromData] = useState({
    name:'',
    email:'',
    message:''
  })
  const [err,setErr] = useState({})

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFromData({
      ...fromData, [name] : value
    })
  }

  const validation = (e)=>{
    e.preventDefault();
    const errors = {}
    if(!fromData.name.trim)
      errors.name = "Name is required";
    if(!fromData.email.trim)
      errors.email = "Email is required";

    if(!fromData.message.trim)
      errors.message = "Message is required";
    else if(fromData.message.length<10)
      errors.message = "Message must be valid and minimum length is 10 characters";

    setErr(errors);
    if(Object.keys(errors).length===0)
      return true;
    else 
      return false;
  }

  const sendEmail = (e) => {
    const value = validation(e);
    if(value){
      e.preventDefault();

      emailjs
        .sendForm('service_bjw9rlz', 'template_46ie0c9', form.current, {
          publicKey: 'N8APIx0oM3jjL6xvN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            handleClose();
            showToast('Thanks for contacting with me.\nI will reach you soon!!','success');
          },
          (error) => {
            console.log('FAILED...', error.text);
            handleClose();
            showToast('Something wents wrong!!!');
          },
        );
    }else{
      
      document.getElementById('your_email').value = '';
      document.getElementById('your_name').value = '';
      document.getElementById('your_msg').value = '';
    }
   
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
      <img src={contact} alt='contact' width={15}/>
      &nbsp; Contact Me
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='text-white bg-dark'>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
              <Modal.Body className='text-light bg-dark'>
                  <Form ref={form} onSubmit={sendEmail}>
                      <Form.Group className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" name='from_name' id='your_name' onChange={handleChange}/>
                          {err.name && <span className='red'>{err.name}</span>}
                      </Form.Group>
                      <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" onChange={handleChange} placeholder="Email"   id='your_email' name='from_email' />
                          {err.email && <span className='red'>{err.email}</span>}
                      </Form.Group>
                      <Form.Group className="mb-3">
                          <Form.Label>Your Message</Form.Label>
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a message here."
                              style={{ height: '100px' }}
                              name='message'
                              id='your_msg'
                              onChange={handleChange}
                            />
                             {err.message && <span className='red'>{err.message}</span>}
                      </Form.Group>
                      <Form.Text className=" text-white ml-4">
                              I'll never share your name and details with anyone else.
                      </Form.Text>
                      <br/>
                      <Button variant="success" type="submit">
                          Submit
                      </Button>
                      
                  </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant='danger'  className='btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactMe;

