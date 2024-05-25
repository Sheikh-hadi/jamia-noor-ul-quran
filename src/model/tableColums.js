import { MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import categoryOption from './categoryOption';
import tableHissa from './tableHissa';

const handleCategoryChange = (value, key) => {
    // Handle the category change
    console.log(`Changed category of record ${key} to ${value}`);
    // Update the state or send the new value to the server
};

const { Option } = Select;

const tableColumns = [
    {
        title: 'S/N',
        dataIndex: 'serialNumber',
        key: 'serialNumber',
        width: '1%',
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Contact Information',
        key: 'contact',
        width: '30%',
        render: (text, record) => (
            <div>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                    {record.name}
                </span>
                <WhatsAppOutlined className='icon' style={{ marginLeft: "10px", fontSize: "15px" }} />
                <MessageOutlined className='icon' style={{ marginLeft: "5px", fontSize: "15px" }} />
                <div style={{ marginTop: "5px", color: "#555" }}>
                    {record.mobile}
                </div>
            </div>
        ),
    },
    {
        title: 'CNIC',
        dataIndex: 'cnic',
        key: 'cnic',
        width: '10%',
    },
    {
        title: 'Cow Category',
        dataIndex: 'cowcategory',
        key: 'category',
        width: '10%',
        render: (text, record) => (
            <Select
                defaultValue={text}
                style={{ width: '100%' }}
                onChange={(value) => handleCategoryChange(value, record.key)}
            >
                {categoryOption.map((item, index) => (
                    <Option key={index} value={item.value}>{item.label}</Option>
                ))}
            </Select>
        ),
    },
    {
        title: 'Hissa Category',
        dataIndex: 'hisacategory',
        key: 'hisa',
        width: '10%',
        render: (text, record) => (
            <Select
                defaultValue={text}
                style={{ width: '100%' }}
                onChange={(value) => handleCategoryChange(value, record.key)}
            >
                {tableHissa.map((item, index) => (
                    <Option key={index} value={item.value}>{item.label}</Option>
                ))}
            </Select>
        ),
    },
    {
        title: 'Amount Status',
        key: 'amount',
        width: '30%',
        render: (text, record) => (
            <div>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                    {record.paid}
                </span>
                <div style={{ marginTop: "5px", color: "#555" }}>
                    {record.due}
                </div>
            </div>
        ),
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        width: '10%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '20%',
    },
]

export default tableColumns;