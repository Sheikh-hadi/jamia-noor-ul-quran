import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Typography, Divider, message, Popconfirm } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import './login.css';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const handleEmailSubmit = () => {
        if (email) {
            setShowPassword(true);
        }
    };


    const onFinish = (values) => {
        console.log('values:', values);
    }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        const confirm = (e) => {
            console.log(e);
            message.success('back to pervious page');
            setShowPassword(false)

        };
        const cancel = (e) => {
            console.log(e);
            message.error('Click on No');
        };

        return (
            <div className="login-container">
                <Row justify="center" align="middle" className="full-height">
                    <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                        <div className="login-box">
                            <img src="/logo.png" alt="Logo" className="logo" />
                            <Title level={2}>Sign in</Title>
                            <Text type="secondary">to continue to Gmail</Text>
                            <Form
                                name="login"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                className="login-form"
                            >
                                {!showPassword && (
                                    <>
                                        <Form.Item
                                            name="email"
                                            rules={[{
                                                required: true,
                                                message: 'Please input your email or phone!'
                                            }]}
                                        >
                                            <Input
                                                placeholder="Email or phone"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" onClick={handleEmailSubmit} block>
                                                Next
                                            </Button>
                                        </Form.Item>

                                        <Divider>or</Divider>

                                        <Form.Item>
                                            <Button icon={<GoogleOutlined />} block>
                                                <a href='https://accounts.google.com/signin'>
                                                    Sign in with Google
                                                </a>
                                            </Button>
                                        </Form.Item>

                                        <Form.Item className="forgot-email">
                                            <a href="#">Forgot email?</a>
                                        </Form.Item>
                                    </>
                                )}
                                {showPassword && (
                                    <>
                                        <Form.Item
                                            name="password"
                                            rules={[{
                                                required: true,
                                                message: 'Please input your password!'
                                            }]}
                                        >
                                            <Input.Password placeholder="Password" />
                                        </Form.Item>
                                        <Form.Item className="forgot-email">
                                            <a href="#">Forgot email?</a>
                                        </Form.Item>
                                        <Form.Item>
                                            <Link to='/'>
                                            <Button type="primary" htmlType="submit" onClick={onFinish} block>
                                                Sign in
                                            </Button>
                                            </Link>

                                            <Popconfirm
                                                title="Back to Gmail"
                                                description="Are you sure to back the page?"
                                                onConfirm={confirm}
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button style={{ marginTop: "4px" }} type="primary" htmlType="submit" block>Back</Button>
                                            </Popconfirm>
                                        </Form.Item>
                                    </>
                                )}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

    export default Login;
