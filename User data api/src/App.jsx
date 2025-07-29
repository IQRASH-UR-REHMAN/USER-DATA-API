import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';


import EmployeeTable from './components/EmployeeTable';
import UserDetails from './components/UserDetails'; 
import AdminPage from './components/AdminPage';

const App = () => {
  return (
 
    
      <Routes>
        
        <Route path="/" element={<AdminPage />} />
        <Route path="/user" element={<EmployeeTable />} />
        <Route path="/user/:id" element={<UserDetails />} /> 
      </Routes>

  );
};

export default App;
