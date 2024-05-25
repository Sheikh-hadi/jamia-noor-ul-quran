import React, { useState } from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
import { Drawer, Button, List, Input, Form } from 'antd';
import categoryOption from '../model/categoryOption'
const AddNewCategoryDrawer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories, setCategories] = useState(categoryOption);
    const [newCategory, setNewCategory] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            const updatedCategories = [...categories, { label: newCategory }];
            setCategories(updatedCategories);
            setNewCategory('');
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <Button
                style={{ margin: "10px" }}
                type="primary"
                size="small"
                icon={<DatabaseOutlined />}
                onClick={showModal}
            >
                Add New Category
            </Button>
            <Drawer
                title='Add or Delete Category'
                onClose={handleCancel}
                open={isModalOpen}
                width={400}
            >
                <List
                    size="small"
                    header={<div>Categories</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={categories}
                    renderItem={(item) => <List.Item>{item.label}</List.Item>}
                />
                <Form layout="inline" style={{ marginTop: '20px' }}>
                    <Form.Item>
                        <Input
                            placeholder="New Category Name"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={handleAddCategory} block>
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default AddNewCategoryDrawer;
