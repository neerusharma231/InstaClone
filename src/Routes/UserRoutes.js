import React from 'react'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp'
import {Routes, Route} from 'react-router-dom'
const UserRoutes = () => {
  return (
   <Routes>
        <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
        </Route>
   </Routes>
  )
}

export default UserRoutes
