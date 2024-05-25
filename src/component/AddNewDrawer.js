import React, { useState } from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
import { Drawer, Form, Input, DatePicker, Button, notification, Radio } from 'antd';
import CowCategoryOption from './CowCategoryOption';
import Hissadropdownoption from './Hissadropdownoption';
import languageText from '../model/LanguageText';

const { TextArea } = Input;

const AddNewDrawer = () => {
    const [openDataDrawer, setOpenDataDrawer] = useState(false);
    const [language, setLanguage] = useState('en');
    const [radioValue, setRadioValue] = useState(1);
    const text = languageText;

    const showDataDrawer = () => {
        setOpenDataDrawer(true);
    };

    const closeDataDrawer = () => {
        setOpenDataDrawer(false);
    };

    const onFinishData = (values) => {
        console.log('Received values:', values);
        notification.success({
            message: 'Form Submission Successful',
            description: `Received values: ${JSON.stringify(values)}`,
        });
        setOpenDataDrawer(false);
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ur' : 'en'));
    };

    const onRadioChange = (e) => {
        setRadioValue(e.target.value);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    style={{ margin: "10px" }}
                    type="primary"
                    size="small"
                    icon={<DatabaseOutlined />}
                    onClick={showDataDrawer}
                >
                    {text[language].addButton}
                </Button>
            </div>
            <Drawer title={text[language].addButton} onClose={closeDataDrawer} open={openDataDrawer} width={400}>
                <Button style={{ display: 'flex', justifyContent: 'flex-end' }} type="default" onClick={toggleLanguage}>
                    {language === 'en' ? 'اردو' : 'English'}
                </Button>

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

                    <Form.Item
                        label={text[language].selectOptionLabel}
                        name="option"
                        rules={[{ required: true, message: 'Please select an option!' }]}
                    >
                        <Radio.Group onChange={onRadioChange} value={radioValue}>
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
            </Drawer>
        </div>
    );
};

export default AddNewDrawer;
