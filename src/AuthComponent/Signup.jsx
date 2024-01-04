import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signin/verify`, formData)
      console.log(response);
      if(response.data.msg === "Verification mail sent on your email, Pls verify"){
        alert("Registration link sent on Your email")
      }else if(response.data.msg === "Already email exists pls login"){
        alert("User already exists")
      }
     
      
    } catch (error) {
      console.error("Error during registration", error)
    }

  }


  return (
    <Container>
      <h1>Register Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='name' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Button variant='primary' type='submit' >Register</Button>
        <p>Already Have a account <Link to='/login'>Login</Link></p>
      </Form>
    </Container>
  )
}

export default Signup