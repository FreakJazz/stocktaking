import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/App.css';
import { DashboardSidebar } from '../src/components/SideBar/index';
import Overview from './pages/overview/index';
import CustomerList  from './pages/customers/index';
import CustomersDetail  from './pages/customers/[customerId]/index';
import Analytics  from './pages/analytics/index';
import Logistics  from './pages/logistics/index';
import { Grid } from '@mui/material';


function App() {
  return (
    <>
    <Router>
        <Grid 
            container
            spacing={3}
            justifyContent="space-between">
              <Grid item 
              xs={2}>
              <DashboardSidebar />

              </Grid>
              <Grid item 
              xs={10}>
              <Routes>
            <Route key="/overview" path="/overview" element={<Overview/>} />
            <Route key="/analytics" path="/analytics" element={<Analytics/>} />
            <Route key="/logistics" path="/logistics" element={<Logistics/>} />
            <Route key="/customers" path="/customers" element={<CustomerList/>} />
            <Route key="/customers/1" path="/customers/1" element={<CustomersDetail/>} />
        </Routes>

              </Grid>
          
        </Grid>
          
    </Router>
    </>
  );
}

export default App;
