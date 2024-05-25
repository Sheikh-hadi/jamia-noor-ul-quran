import React, { useState } from 'react';
import { UserAddOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Drawer, Form, Input, DatePicker, Button, notification, Radio, List, Typography, Modal } from 'antd';
import CowCategoryOption from './CowCategoryOption';
import Hissadropdownoption from './Hissadropdownoption';
import categoryOption from '../model/categoryOption';
import languageText from '../model/LanguageText';

const { TextArea } = Input;
const { Text } = Typography;

const AddNewDrawer = () => {
    const [openDataDrawer, setOpenDataDrawer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openUserDrawer, setOpenUserDrawer] = useState(false);
    const [categories, setCategories] = useState();
    const [newCategory, setNewCategory] = useState({ CowCategoryOption })
    const [value, setValue] = useState(1);
    const [language, setLanguage] = useState('en');
    const text = languageText;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const showDataDrawer = () => {
        setOpenDataDrawer(true);
    };

    const showUserDrawer = () => {
        setOpenUserDrawer(true);
    };

    const closeDataDrawer = () => {
        setOpenDataDrawer(false);
    };

    const closeUserDrawer = () => {
        setOpenUserDrawer(false);
    };

    const onFinishData = (values) => {
        console.log('Received values:', values);
        notification.success({
            message: 'Form Submission Successful',
            description: `Received values: ${JSON.stringify(values)}`,
        });
        setOpenDataDrawer(false);
    };

    const onFinishUser = (values) => {
        console.log('Received values:', values);
        notification.success({
            message: 'User Submission Successful',
            description: `Received values: ${JSON.stringify(values)}`,
        });
        setOpenUserDrawer(false);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ur' : 'en'));
    };

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            setCategories([...categories, newCategory]);
            setNewCategory('');
        }
    };

    const handleDeleteCategory = (category) => {
        setCategories(categories.filter((cat) => cat !== category));
    };


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    style={{ margin: "10px" }}
                    type="primary"
                    size="small"
                    icon={<DatabaseOutlined />}
                    onClick={showModal}
                >
                    add New Category
                </Button>
                <Button
                    style={{ margin: "10px" }}
                    type="primary"
                    size="small"
                    icon={<DatabaseOutlined />}
                    onClick={showDataDrawer}
                >
                    {text[language].addButton}
                </Button>
                <Button
                    style={{ margin: "10px" }}
                    type="primary"
                    size="small"
                    icon={<UserAddOutlined />}
                    onClick={showUserDrawer}
                >
                    {text[language].userAddButton}
                </Button>
            </div>
            <Drawer title={text[language].addButton} onClose={closeDataDrawer} open={openDataDrawer} width={400}>
                <Button style={{ display: 'flex', justifyContent: 'flex-end' }} type="default" onClick={toggleLanguage}>
                    {language === 'en' ? 'اردو' : 'English'}
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <List
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={categoryOption}
                        renderItem={(item) => <List.Item>{item.label}</List.Item>}
                    />
                </Modal>
                <Form
                    name="data_entry"
                    layout="vertical"
                    onFinish={onFinishData}
                    className="data-entry-form"
                >
                    <Form.Item
                        label={text[language].nameLabel}
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].cellNumberLabel}
                        name="cellNumber"
                        rules={[{ required: true, message: 'Please enter your cell number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].cnicLabel}
                        name="cnic"
                        rules={[{ required: true, message: 'Please enter your CNIC!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].cowCategoryLabel}
                        name="cowcategory"
                        rules={[{ required: true, message: 'Please select a cow category!' }]}
                    >
                        <CowCategoryOption />
                    </Form.Item>

                    <Form.Item
                        label={text[language].hisaLabel}
                        name="hisa"
                        rules={[{ required: true, message: 'Please select a hisa!' }]}
                    >
                        <Hissadropdownoption />
                    </Form.Item>

                    <Form.Item
                        label={text[language].timeLabel}
                        name="time"
                        rules={[{ required: true, message: 'Please select time!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} showTime />
                    </Form.Item>

                    <Form.Item
                        label={text[language].amountLabel}
                        name="amount"
                        rules={[{ required: true, message: 'Please enter amount!' }]}
                        initialValue={15000}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].paidAmountLabel}
                        name="paidamount"
                        rules={[{ required: true, message: 'Please enter paid amount!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].remainingAmountLabel}
                        name="remainingamount"
                        rules={[{ required: true, message: 'Please enter remaining amount!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].addressLabel}
                        name="address"
                        rules={[{ required: true, message: 'Please enter your address!' }]}
                    >
                        <TextArea autoSize={{ minRows: 3 }} />
                    </Form.Item>

                    <Form.Item label={text[language].selectOptionLabel}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>A</Radio>
                            <Radio value={2}>B</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {text[language].saveButton}
                        </Button>
                    </Form.Item>
                </Form>

                <div>
                    <h3>{text[language].categoryLabel}</h3>
                    <List
                        bordered
                        dataSource={categories}
                        renderItem={item => (
                            <List.Item>
                                <Text>{item}</Text>
                                <Button
                                    type="link"
                                    onClick={() => handleDeleteCategory(item)}
                                    style={{ color: 'red' }}
                                >
                                    {text[language].delete}
                                </Button>
                            </List.Item>
                        )}
                    />
                    <Input
                        placeholder={text[language].addNewCategory}
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <Button type="primary" onClick={handleAddCategory}>
                        {text[language].addNewCategory}
                    </Button>
                </div>
            </Drawer>

            <Drawer title={text[language].userAddButton} onClose={closeUserDrawer} open={openUserDrawer} width={400}>
                <Button style={{ display: 'flex', justifyContent: 'flex-end' }} type="default" onClick={toggleLanguage}>
                    {language === 'en' ? 'اردو' : 'English'}
                </Button>
                <Form
                    name="user_entry"
                    layout="vertical"
                    onFinish={onFinishUser}
                    className="user-entry-form"
                >
                    <Form.Item
                        label={text[language].nameLabel}
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].cellNumberLabel}
                        name="cellNumber"
                        rules={[{ required: true, message: 'Please enter your cell number!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].cnicLabel}
                        name="cnic"
                        rules={[{ required: true, message: 'Please enter your CNIC!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={text[language].addressLabel}
                        name="address"
                        rules={[{ required: true, message: 'Please enter your address!' }]}
                    >
                        <TextArea autoSize={{ minRows: 3 }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {text[language].userSaveButton}
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    );
};

export default AddNewDrawer;
