import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Chip, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Scrollbar } from '../SideBar/ScrollBar';
import { Sections } from '../../constants/sideBar'
import './styles.css'

export const DashboardSidebar = () => {

  return (
    <>
      <Scrollbar >
        <Box className="Box">
          <List
            className='List'
            component="nav"
            aria-labelledby="nested-list-subheader">

            {Sections.map((section) => (
              <>
                <ListSubheader className='List'>
                  {section.title}
                </ListSubheader>
                <List
                  className='List'
                  component="nav"
                  aria-labelledby="nested-list-subheader">
                  {
                    section.items.map((item) => (
                      <Link className='Link' to={item.path}>
                        <ListItemButton>
                          <ListItemIcon className='Icons'>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.title} />{
                            item.chip !== '' ? <Chip
                              color="primary"
                              label={(
                                <Typography className="Typography">
                                  {item.chip}
                                </Typography>
                              )}
                              size="small"
                            /> : null
                          }

                        </ListItemButton>
                        <Divider />
                      </Link>
                    )
                    )}
                </List>
              </>
                ))}
          </List>
        </Box>
      </Scrollbar>
      {/* <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      /> */}
    </>
  );

};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
