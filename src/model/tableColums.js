import { MessageOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Select, Tooltip } from 'antd';
import categoryOption from './categoryOption';
import tableHissa from './tableHissa';

const handleCategoryChange = (value, key) => {
    console.log(`Changed category of record ${key} to ${value}`);
};

const { Option } = Select;

const tableColumns = [
    {
        title: 'S/N',
        dataIndex: 'serialNumber',
        key: 'serialNumber',
        // width: '1%',
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Contact Information',
        key: 'contact',
        render: (text, record) => (
            <span>
                <span style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
                    {record.name}
                </span>
                {record.mobile ? (
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px", color: "#555" }}>
                        {record.mobile}
                        <span>
                            <Tooltip title="Open WhatsApp">
                                <WhatsAppOutlined key="whatsapp" className="icon" />
                            </Tooltip>
                            <Tooltip title="Open Messanger">
                                <MessageOutlined className='icon' style={{ marginLeft: "5px", fontSize: "15px" }} />
                            </Tooltip>
                        </span>
                    </div>
                ) : null}
            </span>
        ),
    },
    {
        title: 'CNIC',
        dataIndex: 'cnic',
        key: 'cnic',
        // width: '10%',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, record) => (
            <Select
                size='small'
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
        title: 'Amount Status',
        key: 'amount',
        // width: '30%',
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
        // width: '10%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        // width: '20%',
    },
]

export default tableColumns;