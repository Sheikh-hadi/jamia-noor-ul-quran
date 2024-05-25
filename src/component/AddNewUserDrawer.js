import React, { useState } from 'react'
import { UserAddOutlined } from '@ant-design/icons';
import { Drawer, Form, Input, Button, notification} from 'antd';
import languageText from '../model/LanguageText';

const AddNewUserDrawer = () => {
    const { TextArea } = Input;
    const [openUserDrawer, setOpenUserDrawer] = useState(false);
    const [language, setLanguage] = useState('en');
    const text = languageText;
    const showUserDrawer = () => {
        setOpenUserDrawer(true);
    };

    const closeUserDrawer = () => {
        setOpenUserDrawer(false);
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

    return (
        <div><Button
            style={{ margin: "10px" }}
            type="primary"
            size="small"
            icon={<UserAddOutlined />}
            onClick={showUserDrawer}
        >
            {text[language].userAddButton}
        </Button>
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
            </Drawer></div>
    )
}

export default AddNewUserDrawer