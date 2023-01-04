import React, { useEffect, useState } from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/layout/Spinner'

const Login = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);

    const submitHandler=async(values)=>{
        try {
          setLoading(true)
         const {data}=  await axios.post('/users/login',values)
         console.log(data)
          message.success("Login successful")
          setLoading(false)
          localStorage.setItem("user",JSON.stringify({...data.user,password:''}))
          navigate('/')
        } catch (error) {
          setLoading(false)
          message.error("something went wrong")
        }
    }

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
            <h1>Login Form</h1>
            <Form.Item label='email' name='email'>
                <Input type='email'/>
            </Form.Item>

            <Form.Item label='password' name='password'>
                <Input type='password'/>
            </Form.Item>

            <div className='form-button'>
                {/* <Link to='login'>Already Register ? Click here to login</Link> */}
                <button className='btn btn-primary'>Login</button>
                <Link to='/register'>New User ? Register</Link>
            </div>
        </Form>
      </div>
    </>
  )
}

export default Login
