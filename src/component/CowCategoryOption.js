import React from 'react';
import { Select } from 'antd';
import categoryOption from '../model/categoryOption';
const CowCategoryOption = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    <Select
        defaultValue="barahissa"
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
            options={categoryOption}
        /></div>
    )
}

export default CowCategoryOption