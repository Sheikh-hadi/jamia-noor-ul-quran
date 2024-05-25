import React from 'react'
import Home from './component/homePage/Home';
import DataList from './component/dataList/DataList'
import Login from './component/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/datalist' element={<DataList />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App