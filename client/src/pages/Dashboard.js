// src/pages/Dashboard.js
import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import '../Styles/DashboardStyle.css';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Title level={2} className="dashboard-title">Welcome to Your Dashboard</Title>
      
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Patient Details" className="dashboard-card">
            {/* Display patient details here */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Appointments" className="dashboard-card">
            {/* Display appointments here */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Doctors Available" className="dashboard-card">
            {/* Display available doctors here */}
          </Card>
        </Col>
        {/* Add more sections as needed */}
      </Row>
    </div>
  );
};

export default Dashboard;
