// app.jsx
// import React from 'react';
//import HomePage from './components/Homepage';
//import Dashboard from './components/Dashboard';
import Ddashboard from './components/DdashBoard';
import EventForm from './components/EventForm';
import HomePage from './components/Homepage';
import LandLoanPage from './components/LandloanPage';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/login';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashBoard';
import AdminProfile from './components/AdminProfile';
import AdminUsers from './components/AdminUsers';
import AdminUserView from './components/AdminUserView';
import AdminUserUpdate from './components/AdminUserUpdate';
import AdminUserCreate from './components/AdminUserCreate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CropLoanPage from './components/CropLoanPage';
import AboutUsPage from './components/AboutUsPage';
import Slider from 'react-slick';




const App = () => {
  return (
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
            <Route path="/DdashBoard" element={<Ddashboard/>}/>
            <Route path="/EventForm" element={<EventForm/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/LandLoanPage" element={<LandLoanPage/>}/>
            <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashBoard" element={<AdminDashboard/>} />
        <Route path="/AdminProfile" element={<AdminProfile/>} />
        <Route path="/AdminUsers" element={<AdminUsers/>} />
        <Route path="/AdminUserView" element={<AdminUserView/>} />
        <Route path="/AdminUserUpdate" element={<AdminUserUpdate/>} />
        <Route path="/AdminUserCreate" element={<AdminUserCreate/>} />
        <Route path="/CropLoanPage" element={<CropLoanPage/>}/>
        <Route path="/About us" element={<AboutUsPage/>}/>
        <Route path="/Slider" element={<Slider/>}/>
          </Routes>
          </BrowserRouter>
   
  );
};

export default App;
