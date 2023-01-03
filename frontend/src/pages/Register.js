import React from 'react'
import {Form,Input} from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
    const submitHandler=(values)=>{
        console.log(values)
    }
  return (
    <>
      <div className="register-page">
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
