import './App.css';
import Budget from './budget/budget';
import Checklist from './checklist/checklist';
import GuestList from './guestlist/guestlist';
import Login from './login/Login';
import Register from './register/register';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vendors from './vendors/vendors';
import Inspiration from './inspiration/inspiration';
import Seating from './seating/seating';
import Blogs from './blogs/blogs';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checklist" element={<Checklist/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/guestlist" element={<GuestList/>}/>
        <Route path="/vendors" element={<Vendors/>}/>
        <Route path="/inspiration" element={<Inspiration/>}/>
        <Route path="/seating" element={<Seating/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
