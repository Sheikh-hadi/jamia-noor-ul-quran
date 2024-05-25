import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', borderTop: '1px solid #e8e8e8', padding: '24px 50px', backgroundColor: '#f0f2f5' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space align="center">
          <Link href="/" style={{ marginRight: '16px' }}>
            <svg width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>
          <Text type="secondary">© 2021 Company, Inc</Text>
        </Space>
        <Space  style={{display:"flex", justifyContent:"flex-end"}} align="center" size="middle">
          <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)' }}><TwitterOutlined style={{ fontSize: '24px' }} /></Link>
          <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)' }}><InstagramOutlined style={{ fontSize: '24px' }} /></Link>
          <Link href="#" style={{ color: 'rgba(0, 0, 0, 0.45)' }}><FacebookOutlined style={{ fontSize: '24px' }} /></Link>
        </Space>
      </Space>
    </Footer>
  );
};

export default CustomFooter;
