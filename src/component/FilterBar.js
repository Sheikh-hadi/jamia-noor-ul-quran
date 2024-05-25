import React from 'react'
import AddNewCategoryDrawer from './AddNewCategoryDrawer';
import AddNewUserDrawer from './AddNewUserDrawer';
import AddNewDrawer from './AddNewDrawer';
import SearchFilter from './SearchFilter';
import { Col, Row } from 'antd';

const FilterBar = () => {
    return (
        <Row style={{ display: "flex" , justifyContent:"space-between"}}>
            <Col style={{ display: "flex", justifyContent: "space-around", alignItems: 'center' }} >
                <SearchFilter />
                <SearchFilter />
                <SearchFilter />
            </Col>
            <Col style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}   >
                <AddNewCategoryDrawer />
                <AddNewUserDrawer />
                <AddNewDrawer />
            </Col>
        </Row>
    )
}

export default FilterBar;
