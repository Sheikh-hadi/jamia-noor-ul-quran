import React from 'react';
import { Input } from 'antd';
import './searchFilter.css'; 

const { Search } = Input;

const SearchFilter = () => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <Search
            size='small'
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            className="custom-search"
            style={{
                width: 200,
            }}
        />
    );
};

export default SearchFilter;
