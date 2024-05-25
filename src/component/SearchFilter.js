import React, { useState, useEffect } from 'react';
import { Input, Select, Row, Col} from 'antd';
import axios from 'axios';
import './searchFilter.css'; // Import custom CSS for styling

const { Option } = Select;

const SearchFilter = () => {
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        if (searchText.trim() === "") {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get('/api/search', {
                    params: {
                        query: searchText
                    }
                });
                setResults(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [searchText]);

    const selectBefore = (
        <Select defaultValue="category" style={{ width: 100 }}>
            <Option value="category">Category</Option>
        </Select>
    );

    return (
        <div className="search-filter">
            <Row gutter={16} align="middle">
                <Col span={24}>
                    <Input
                        addonBefore={selectBefore}
                        placeholder="Enter your Category"
                        value={searchText}
                        onChange={handleInputChange}
                        size="small"
                    />
                </Col>
            </Row>

        </div>
    );
};

export default SearchFilter;
