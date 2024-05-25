import React from 'react';
import './home.css';
import { Row, Col, Image, Typography } from 'antd';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import FilterBar from '../FilterBar';
import { Footer } from 'antd/es/layout/layout';
import CustomFooter from '../footer/Footer';
const { Title } = Typography;
const Home = () => {
    return (
        <div>

            <Header />
            <FilterBar />
            <div className="home-container">
                <Row style={{ marginTop: "10px" }} gutter={140} >
                    <Col span={8}>
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
                    </Col>

                    <Col span={8}>
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
                    </Col>

                    <Col span={8}>
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
                    </Col>

                </Row>

                <Row style={{ marginTop: "10px" }} align={'middle'} gutter={140}>
                    <Col span={8}>
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

                    </Col>

                    <Col span={8}>
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
                    </Col>

                    <Col span={8}>
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
                    </Col>

                </Row>
            </div>
            <CustomFooter/>
        </div>
    );
}

export default Home;




