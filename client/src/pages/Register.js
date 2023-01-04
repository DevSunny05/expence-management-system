import React, { useEffect, useState } from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/layout/Spinner'
const Register = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);

    const submitHandler=async(values)=>{
        try {
          console.log(values)
          setLoading(true)
          await axios.post('/users/register',values)
          message.success("Registration Successful")
          setLoading(false)
          navigate('/login')
        } catch (error) {
          setLoading(false)
          message.error('Invalid username and password')
        }
    }
    // prevent for login user
    useEffect(()=>{
      if(localStorage.getItem('user')){
        navigate('/');
      }
    },[navigate])

  return (
    <>
      <div className="register-page">
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandler}>
            <h1>Register Form</h1>
            <Form.Item label='name' name='name'>
                <Input/>
            </Form.Item>

            <Form.Item label='email' name='email'>
                <Input type='email'/>
            </Form.Item>

            <Form.Item label='password' name='password'>
                <Input type='password'/>
            </Form.Item>

            <div className='form-button'>
                {/* <Link to='login'>Already Register ? Click here to login</Link> */}
                <button className='btn btn-primary'>Register</button>
                <Link to='/login'>Already Register? Login</Link>
            </div>
        </Form>
      </div>
    </>
  )
}

export default Register
