import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Typography, Divider, message, Image } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import './login.css';

const { Title, Text } = Typography;

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        if (values.email === 'sheikhgee322@gmail.com' && values.password === 'asad123') {
            const user = {
                name: 'Sheikh Gee',
                email: values.email,
                imageUrl: 'https://example.com/user-image.jpg'
            };
            localStorage.setItem('user', JSON.stringify(user));
            message.success('Logged in successfully!');
            navigate('/');
        } else {
            message.error('Login failed!');
        }
        setLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login-container'>
            <Row>
                <Col span={14} offset={1}>
                    <Image
                        width={200}
                        src="/logo.png"
                        alt="Logo"
                        className="logo"
                    />
                    <Title level={2}>Sign in</Title>
                    <Text type="secondary">JAMIA-NOOR-UL-QURAN</Text>
                    <br />
                    <Text type="secondary">Description</Text>
                </Col>
                <Col span={8} offset={1}>
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="login-form"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Form.Item
                            label="Enter your name"
                            name="email"
                            rules={[{
                                required: true,
                                message: 'Please input your email or phone!'
                            }]}
                        >
                            <Input placeholder="Email or phone" />
                        </Form.Item>
                        <Form.Item
                            label="Enter your Password"
                            name="password"
                            rules={[{
                                required: true,
                                message: 'Please input your password here!'
                            }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <Divider>or</Divider>
                        <Form.Item>
                            <Button icon={<GoogleOutlined />} block>
                                <a href='https://accounts.google.com/signin'>
                                    Sign in with Google
                                </a>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading} block>
                                Sign in
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
