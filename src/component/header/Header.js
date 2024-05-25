import React from 'react';
import './header.css';
import { Col, Typography, Image, Row, Dropdown, Menu } from 'antd';

const { Title } = Typography;

const Header = () => {
    const menu = (
        <Menu className="dropdown-menu">
            <Menu.Item key="0" className="dropdown-item">
                <a href="/logout">Logout</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="header-container">
            <Row align="middle" justify="space-between" style={{ width: '100%' }}>
                <Col xs={4} sm={4} md={2}>
                    <img src="/logo.png" alt="Logo" className="logo" />
                </Col>
                <Col xs={10} sm={16} md={14}>
                    <Title style={{ marginLeft: "360px" }} level={3} className="title">JAMIA-NOOR-UL-QURAN</Title>
                </Col>
                <Col xs={10} sm={4} md={8} className="user">
                    <Title level={5} className="username">Abdul Wahab</Title>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Image
                            preview={false}
                            style={{ borderRadius: '50%', cursor: 'pointer' }}
                            width={40}
                            height={40}
                            src="user.jpg"
                        />
                    </Dropdown>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
