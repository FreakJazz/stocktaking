import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import './styles/App.css';
import { DashboardSidebar } from '../src/components/SideBar/index';
import { Overview } from './pages/overview/index';
import CustomerList  from './pages/customers/index';
import Analytics  from './pages/analytics/index';
import Logistics  from './pages/logistics/index';


function App() {
  return (
    <Router>
      <Container className="App">
          <DashboardSidebar />
          <Routes>
          <Route exact path="/" element={<Overview/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/logistics" element={<Logistics/>} />
          <Route path="/customers" element={<CustomerList/>} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
