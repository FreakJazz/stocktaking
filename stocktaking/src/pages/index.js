import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DashboardSidebar } from '../components/SideBar/index';

export const DashboardLayout = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <DashboardSidebar
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};