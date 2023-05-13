import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Container } from '@mui/material';
import './styles/App.css';
import { DashboardSidebar } from '../src/components/SideBar/index';

function App() {
  return (
    <Router>
      <Container className="App">
          <DashboardSidebar />
      </Container>
    </Router>
  );
}

export default App;
