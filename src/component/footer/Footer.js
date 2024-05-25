import React from 'react';
import { Layout, Typography, Space, Row, Col } from 'antd';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', borderTop: '1px solid #e8e8e8', padding: '24px 50px', backgroundColor: '#f0f2f5' }}>
      <Row justify="space-between" align="middle" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Col xs={24} sm={12} md={8} style={{ textAlign: 'left' }}>
          <Space align="center">
            <Link href="/" style={{ marginRight: '16px' }}>
              <svg width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </Link>
            <Text type="secondary">© 2021 Company, Inc</Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} md={8} style={{ textAlign: 'right' }}>
          <Space align="center" size="middle">
            <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#1DA1F2'} onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.45)'}><TwitterOutlined style={{ fontSize: '24px' }} /></Link>
            <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#C13584'} onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.45)'}><InstagramOutlined style={{ fontSize: '24px' }} /></Link>
            <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#4267B2'} onMouseLeave={(e) => e.target.style.color = 'rgba(0, 0, 0, 0.45)'}><FacebookOutlined style={{ fontSize: '24px' }} /></Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
