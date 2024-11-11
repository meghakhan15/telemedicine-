// src/pages/Register.js
import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Simulate registration logic (replace with actual API call)
      message.success('Registration Successful');
      navigate('/dashboard'); // Redirect to dashboard on success
    } catch (error) {
      message.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8} xl={6}>
          <div className="register-card">
            <Title level={2} className="register-title">Register</Title>
            <Form onFinish={onFinish} layout="vertical" className="register-form">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 6, message: 'Password must be at least 6 characters!' },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirm"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading} className="register-button">
                  Register
                </Button>
              </Form.Item>
              <div className="register-footer">
                <p>
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
