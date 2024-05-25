import React from 'react';
import { Select } from 'antd';
import tableHissa from '../model/tableHissa';


const Hissadropdownoption = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    <Select
        style={{
            width: 120,
        }}
        onChange={handleChange}
    />

    return (
        <div> <Select
            defaultValue="Select"
            style={{
                width: '100%',
            }}
            onChange={handleChange}
            options={tableHissa}
        /></div>
    )
}

export default Hissadropdownoption