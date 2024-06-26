import {  Routes, Route  } from "react-router-dom";
import Register from "./Register/Register.jsx";
import Login from "./login/Login.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";

import Home from "./Home.jsx";
import ForgetPassword from "./login/ForgetPassword.jsx";
import ResetPassword from "./login/ResetPassword.jsx";


const AppRoute = () => {
  return (
      <Routes>
        <Route exact  path="/" element={<ProtectedRoute Component={ <Home /> } />} />
       
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
  );
};

export default AppRoute;