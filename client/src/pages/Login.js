// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Select, Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/Login.css';

const { Title } = Typography;
const { Option } = Select;

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const [role, setRole] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setRole(queryParams.get('role'));
  }, [location]);

  const onFinish = (values) => {
    console.log('Form Values:', values);

    // Show modal if doctor role and needs approval
    if (role === 'doctor') {
      setIsModalVisible(true);
    } else {
      navigate('/dashboard'); // Redirect to dashboard on successful login
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <Title level={2} className="login-title">
          Login as {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User'}
        </Title>
        <Form onFinish={onFinish} layout="vertical" className="login-form">
          <Form.Item
            label="User Name"
            name="userName"
            rules={[{ required: true, message: 'Please input your user name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="User Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="User Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="User Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item
            label="Security Question"
            name="securityQuestion"
            rules={[{ required: true, message: 'Please select a security question!' }]}
          >
            <Select placeholder="Select a security question">
              <Option value="pet">What is the name of your first pet?</Option>
              <Option value="mother">What is your mother's maiden name?</Option>
              <Option value="city">What city were you born in?</Option>
            </Select>
          </Form.Item>
          {role === 'doctor' && (
            <>
              <Form.Item
                label="Medical License Number"
                name="licenseNumber"
                rules={[{ required: true, message: 'Please enter your medical license number!' }]}
              >
                <Input placeholder="Enter your medical license number" />
              </Form.Item>
              <Form.Item
                label="Specialization"
                name="specialization"
                rules={[{ required: true, message: 'Please enter your specialization!' }]}
              >
                <Input placeholder="Enter your specialization" />
              </Form.Item>
            </>
          )}
          {role === 'patient' && (
            <Form.Item
              label="Family Members Info"
              name="familyMembers"
              rules={[{ required: true, message: 'Please provide family members information!' }]}
            >
              <Input placeholder="Enter your family members' info" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title="Doctor Approval Pending"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <p>Your registration as a doctor is pending approval from the admin. Please wait for confirmation before accessing the system.</p>
      </Modal>
    </div>
  );
};

export default Login;
