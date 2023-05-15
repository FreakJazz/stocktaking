import React from "react";
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ErrorIcon from "@mui/icons-material/Error";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import WarningIcon from "@mui/icons-material/Warning";
import "./styles.css";

export const LogisticsOverview = (props) => (
  <Grid container spacing={4} {...props}>
    <Grid item lg={3} md={6} xs={12}>
      <Card className="card">
        <Box className="box">
          <Avatar className="Avatar" variant="rounded">
            <Box className="boxAni">
              <Box className="boxOther" />
            </Box>
          </Avatar>
          <Typography variant="h5">38</Typography>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Pedidos actuales
        </Typography>
      </Card>
    </Grid>
    <Grid item lg={3} md={6} xs={12}>
      <Card className="card">
        <Box className="box">
          <Avatar variant="rounded" className="Avatar">
            <WarningIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">2</Typography>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Pedidos perdidos
        </Typography>
      </Card>
    </Grid>
    <Grid item lg={3} md={6} xs={12}>
      <Card className="card">
        <Box className="box">
          <Avatar className="Avatar">
            <ErrorIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">1</Typography>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Pedidos en cola
        </Typography>
      </Card>
    </Grid>
    <Grid item lg={3} md={6} xs={12}>
      <Card className="card">
        <Box className="box">
          <Avatar className="Avatar">
            <TimelapseIcon fontSize="small" />
          </Avatar>
          <Typography variant="h5">2</Typography>
        </Box>
        <Typography color="textSecondary" variant="body2">
          Llegada de mercadería
        </Typography>
      </Card>
    </Grid>
  </Grid>
);
