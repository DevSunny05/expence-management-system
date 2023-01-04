import { Form, Input, message, Modal, Select } from 'antd';
import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Spinner from '../components/layout/Spinner';
import axios from 'axios'

const HomePage = () => {
  const [showModal,setShowModal]=useState(false);
  const [loading,setLoading]=useState(false);

  const handleSubmit=async(values)=>{
    try {
      const user=JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transactions/add-transaction',{...values,userid:user._id})
      setLoading(false)
      message.success("Transaction Added Successfully.")
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      message.error("Fail To add Transaction")
    }
  }
  return (
    <Layout>
      {loading && <Spinner/>}
      <div className='filters'>
        <div>Range Filters</div>
        <div>
          <button className='btn btn-primary'onClick={()=>setShowModal(true)}>Add New</button>
        </div>
      </div>

      <div className='content'>

      </div>

      <Modal title="Add Transaction" open={showModal} onCancel={()=>setShowModal(false)} footer={false}>
        <Form layout='vertical' onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount"> 
            <Input type="text"/>
          </Form.Item>

          <Form.Item label="Type" name="type"> 
            <Select>
              <Select.Option value='income'>Income</Select.Option>
              <Select.Option value='expense'>Expense</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Category" name="category"> 
           <Input type='text'/>
          </Form.Item>

          <Form.Item label="Date" name="date"> 
           <Input type='date'/>
          </Form.Item>

          <Form.Item label="Refrence" name="refrence"> 
           <Input type='text'/>
          </Form.Item>

          <Form.Item label="Description" name="description"> 
           <Input type='text'/>
          </Form.Item>

          <div className="d-flex justify-content-end">
            <button type='submit' className='btn btn-primary'>Save</button>
          </div>
        </Form>
      </Modal>
    </Layout>
  )
}

export default HomePage
