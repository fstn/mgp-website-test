import React from 'react';
import styled from 'styled-components'
import {Alert, Button, Form, Input, notification} from "antd";
import {UserOutlined} from '@ant-design/icons'
import axios from "axios";

// language=LESS prefix=*{ suffix=}
const Style = styled.div``


function MagicLink() {

    async function onFinish(values: any) {
        await axios.post(`https://api.mgpmasks.com/users/magic-link`, {email: values.email}, {})

        notification["info"]({
            message: 'Please check your email!',
            description:
                'We sent you a special magic link in your email address. You can use it to connect from everywhere!',
        });
    }

    return (
        <Style>
            <Alert type={"info"}
                   message="Use a magic link. If you do'nt have one, check your emails or send it again."/>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    id={"email"}
                    rules={[{required: true, message: 'Please input your Email!'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item>
                    <>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Get my magic link !
                        </Button>
                    </>
                </Form.Item>
            </Form>
        </Style>
    );
}

export default MagicLink;
