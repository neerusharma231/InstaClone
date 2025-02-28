import React from 'react'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import ForgotPassword from '../Pages/ForgotPassword';
import {Routes, Route} from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import HomePage from "../Pages/HomePage";
const UserRoutes = () => {
  return (
   <Routes>
        <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/' element={<HomePage />} />
        </Route>
   </Routes>
  )
}

export default UserRoutes
