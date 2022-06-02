import React from 'react'
import {Button, Form, Input} from "antd"

function AddFoodForm(props) {
    return (
        <div>
            <h3>Add food entry</h3>
            <Form className='foodForm' layout='vertical'>
                <Form.Item label='name'>
                    <Input placeholder='name'/>
                </Form.Item>
                <Form.Item label='image'>
                    <Input placeholder='image'/>
                </Form.Item>
                <Form.Item label='calories'>
                    <Input placeholder='calories'/>
                </Form.Item>
                <Form.Item label='servings'>
                    <Input placeholder='servings'/>
                </Form.Item>
                <Button type="primary">Create</Button>
            </Form>
        </div>
    )
}

export default AddFoodForm
