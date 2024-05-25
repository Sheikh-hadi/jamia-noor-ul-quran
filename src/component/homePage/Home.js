import React from 'react';
import './home.css';
import { Row, Col, Image, Typography } from 'antd';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import FilterBar from '../FilterBar';
import CustomFooter from '../footer/Footer';
import categoryOption from '../../model/categoryOption';

const { Title } = Typography;

const Home = () => {
    return (
        <div>
            <Header />
            <FilterBar />
            <Row style={{ marginTop: "10px" }} gutter={140}>
                {categoryOption.map((item, index) => {
                    return (
                        <Col key={index} span={8}>
                            <div className="home-container">
                                <Link to='/datalist'>
                                    <div className="image-container">
                                        <Image
                                            preview={false}
                                            width={160}
                                            className='cow-img'
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />
                                        <img
                                            src="allaa.jpg"
                                            alt="Overlay"
                                            className="overlay-img"
                                        />
                                    </div>
                                </Link>
                                <Title style={{ marginTop: "10px" }} level={3}>(15000)اعلٰی</Title>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            <CustomFooter />
        </div>
    );
}

export default Home;
