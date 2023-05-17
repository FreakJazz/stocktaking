import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { PropertyList } from '../Selectors/PropertyList';
import { PropertyListItem } from '../Selectors/PropertyListItem';

const statusOptions = ['Canceled', 'Complete', 'Rejected'];

export const OrderSummary = (props) => {
  const { order, ...other } = props;
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Card {...other}>
      <CardHeader title="Basic info" />
      <Divider />
      <PropertyList>
        <PropertyListItem
          label="Customer"
        >
          <Typography
            color="primary"
            variant="body2"
          >
            {order.customer.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.address1}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.city}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.customer.country}
          </Typography>
        </PropertyListItem>
        <Divider />
        <PropertyListItem
          label="ID"
          value={order.id}
        />
        <Divider />
        <PropertyListItem
          label="Invoice"
          value={order.number}
        />
        <Divider />
        <PropertyListItem
          label="Date"
          value={format(order.createdAt, 'dd/MM/yyyy HH:mm')}
        />
        <Divider />
        <PropertyListItem
          label="Promotion Code"
          value={order.promotionCode}
        />
        <Divider />
        <PropertyListItem
          label="Total Amount"
          value={`${order.currency}${order.totalAmount}`}
        />
        <Divider />
        <PropertyListItem
          label="Status"
        >
          <Box
            sx={{
              alignItems: {
                sm: 'center'
              },
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row'
              },
              mx: -1
            }}
          >
            <TextField
              label="Status"
              margin="normal"
              name="status"
              onChange={handleChange}
              select
              SelectProps={{ native: true }}
              sx={{
                flexGrow: 1,
                m: 1,
                minWidth: 150
              }}
              value={status}
            >
              {statusOptions.map((statusOption) => (
                <option
                  key={statusOption}
                  value={statusOption}
                >
                  {statusOption}
                </option>
              ))}
            </TextField>
            <Button
              sx={{ m: 1 }}
              variant="contained"
            >
              Guardar
            </Button>
            <Button sx={{ m: 1 }}>
              Cancelar
            </Button>
          </Box>
        </PropertyListItem>
      </PropertyList>
    </Card>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.object.isRequired
};
