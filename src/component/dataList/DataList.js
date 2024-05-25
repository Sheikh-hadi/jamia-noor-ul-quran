import React, { useState } from 'react';
import './list.css';
import { Row, Col, Table, List, Avatar, Skeleton, Tooltip } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import tableColumns from '../../model/tableColums';
import tableDataSource from '../../model/tableDatasource';
import dataList from '../../model/ListData';
import Header from '../header/Header';
import FilterBar from '../FilterBar';
import { Footer } from 'antd/es/layout/layout';

const DataList = () => {
    const [showTable, setShowTable] = useState(false);
    const view = <Skeleton />
    const handleShowTable = () => {
        setShowTable(true);
    };

    const data = dataList;
    const dataSource = tableDataSource;
    const columns = tableColumns;

    return (
        <div>
            <Header />
            <FilterBar />
            <Row style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Col span={24} style={{ display: 'flex', flexDirection: 'row', flex: '1 1 auto' }}>
                    <div
                        id="scrollableDiv"
                        style={{
                            flex: '0 0 25%',
                            overflow: 'auto',
                            padding: '0 16px',
                            borderRadius: '8px',
                            border: '1px solid #e8e8e8',
                            display: 'flex',
                            flexDirection: 'column',
                            maxHeight: '100%',
                        }}
                    >
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item
                                    key={index}
                                    onClick={handleShowTable}
                                    actions={[
                                        <Tooltip title="Open WhatsApp">
                                            <WhatsAppOutlined key="whatsapp" className="icon" />
                                        </Tooltip>
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                    <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', maxHeight: '100%' }}>
                        {showTable ? (
                            <Table
                                pagination={false}
                                dataSource={dataSource}
                                columns={columns}
                                bordered
                                // scroll={{ x: true, y: true }}
                                style={{ flex: '1 1 auto', overflow: 'auto' }}
                            />
                        ) : (
                            <div style={{ flex: '1 1 auto', overflow: 'auto' }}>{view}</div>
                        )}
                    </div>
                </Col>
            </Row>
            <Footer/>
        </div>
    );
};

export default DataList;
