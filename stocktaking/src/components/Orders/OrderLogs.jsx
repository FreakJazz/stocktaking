import React from 'react';
import { format, subHours } from 'date-fns';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const activities = [
  {
    log: 'Carga de banda completa (Cargar ID: 5ecb8a6879877087d4aa2690)',
    date: subHours(Date.now(), 18).getTime()
  },
  {
    log: 'El estado del pedido cambió de Pendiente de pago a Completado.',
    date: subHours(Date.now(), 21).getTime()
  }
];

export const OrderLogs = (props) => {
  const { order, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Logs" />
      <Divider />
      <CardContent>
        <Timeline
          sx={{
            m: 0,
            p: 0
          }}
        >
          {activities.map((activity, index) => (
            <TimelineItem
              key={activity.date}
              sx={{
                '&::before': {
                  display: 'none'
                }
              }}
            >
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    border: 0,
                    p: 0
                  }}
                >
                  <Avatar>
                    <ShoppingCartIcon fontSize="small" />
                  </Avatar>
                </TimelineDot>
                {activities.length - 1 > index && (
                  <TimelineConnector
                    sx={{
                      backgroundColor: 'divider',
                      minHeight: 30
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">
                  {activity.log}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="caption"
                >
                  {format(activity.date, 'MMM dd, h:mm a')}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <Button sx={{ mt: 2 }}>
          Cargar mas
        </Button>
      </CardContent>
    </Card>
  );
};

