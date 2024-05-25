import React from 'react';
import './header.css';
import { Col, Typography, Image } from 'antd';

const { Title } = Typography;

const Header = () => {
    return (
        <div className="header-container">
            <Col xs={4} sm={4} md={2}>
                <img src="/logo.png" alt="Logo" className="logo" />
            </Col>
            <Col xs={10} sm={16} md={14}>
                <Title level={3} className="title">JAMIA-NOOR-UL-QURAN</Title>
            </Col>
            <Col xs={4} sm={4} md={8} className="user">
                <Title level={5} className="title">Abdul Wahab</Title>
                <Image
                    preview={false}
                    style={{ borderRadius: "50%" }}
                    width={50}
                    height={50}
                    src="user.jpg"
                />
            </Col>
        </div>
    );
}

export default Header;
