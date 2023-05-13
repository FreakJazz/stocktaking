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
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import './styles.css'

export const DashboardSidebar = () => {
  const [stateCustom, setStateCustom] = useState(false);
  const [stateProducts, setStateProducts] = useState(false);
  const [stateOrders, setStateOrders] = useState(false);
  const [stateInvoices, setStateInvoices] = useState(false);

  const customSubMenu = (title) => {
    console.log('Clicked object:', title);
    if (title === 'Clientes'){
      setStateCustom(!stateCustom);
    }
    if (title === 'Productos'){
      setStateProducts(!stateProducts);
    }
    if (title === 'Pedidos'){
      setStateOrders(!stateOrders);
    }
    if (title === 'Facturas'){
      setStateInvoices(!stateInvoices);
    }
  };

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
                      item.children === '' ?
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
                              /> : null}
                          </ListItemButton>
                          <Divider />
                        </Link>
                        :
                        <>
                        <Link className='Link' onClick={() => customSubMenu(item.title)}>
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
                              /> : null}
                              {stateCustom ?
                                <KeyboardArrowUpTwoToneIcon className='Icons' fontSize="small" />
                                :<KeyboardArrowDownTwoToneIcon className='Icons' fontSize="small" />
                              }
                              </ListItemButton>
                              
                              <Divider />
                            </Link>
                            {stateCustom ?
                              <>
                                <List
                                  className='List'
                                  component="nav"
                                  aria-labelledby="nested-list-subheader">
                                  {item.children.map((child) => (
                                    <Link className='Link' to={child.path}>
                                      <ListItemButton>
                                        <ListItemText primary={child.title} /></ListItemButton>
                                      <Divider />
                                    </Link>))
                                  }
                                </List>
                              </> :null


                            }
                          </>
                  
                            ))}

                          </List>


                        </>))}

                </List>
              </Box >
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
