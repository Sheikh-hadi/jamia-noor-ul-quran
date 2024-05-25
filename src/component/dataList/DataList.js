import React, { useState } from 'react';
import '../../App.css';
import { Row, Col, Table, List, Avatar } from 'antd';
import tableColumns from '../../model/tableColums';
import tableDataSource from '../../model/tableDatasource';
import dataList from '../../model/ListData';
import Header from '../header/Header';
import Footer from '../Footer';

const DataList = () => {
    const [showtable, setShowtable] = useState(false);

    const handleShowTable = () => {
        setShowtable(true);
    };

    const data = dataList;
    const dataSource = tableDataSource;
    const columns = tableColumns;

    return (
        <div style={{ height: '100vh' }}>
            <Header />
            <Row style={{ height: '100%' }}>
                <Col span={6} style={{ height: '100%' }}>
                    <div
                        id="scrollableDiv"
                        style={{
                            height: '100%',
                            overflow: 'auto',
                            padding: '0 16px',
                            borderRadius: "8px",
                        }}
                    >
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item key={index} onClick={handleShowTable}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
                {showtable && (
                    <Col span={18} style={{ height: '100%' }}>
                        <Table
                            pagination={false}
                            dataSource={dataSource}
                            columns={columns}
                            bordered={true}
                            scroll={{ x: true }}
                            style={{ height: '100%' }}
                        />
                    </Col>
                )}
            </Row>
            <Footer />
        </div>
    );
};

export default DataList;
