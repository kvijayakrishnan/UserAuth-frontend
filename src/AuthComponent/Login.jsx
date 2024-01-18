import React, {useState} from 'react';
import { Container,Form, Button } from 'react-bootstrap';
import '../AuthStyles/Login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'



const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
      })
      const navigate =useNavigate()
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
      }
    
      const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, formData)
          console.log(response);
          if (response.data.msg === "Invalid Username or password") {
            alert("Invalid User")
          } else if(response.data.msg === "server busy"){
            alert("Verify user id and password")
          }else{
            localStorage.setItem("userInfo", JSON.stringify(response.data))
            navigate("/home")
          }

          
        } catch (error) {
          console.log("Error during login",error)
        }
      }
    
  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' name='email' placeholder='Enter Your Email' value={formData.email} onChange={handleChange} required />
          <p>Eg : vijaykrishnanbk@gmail.com</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='text' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} required />
          <p>Eg : 123456789</p>
        </Form.Group>
        <Button variant='primary' type='submit' >Login</Button>
      </Form>
    </Container>
  )
}

export default Login