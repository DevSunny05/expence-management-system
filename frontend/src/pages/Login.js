import React from 'react'
import {Form,Input} from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    const submitHandler=(values)=>{
        console.log(values)
    }
  return (
    <>
      <div className="register-page">
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
