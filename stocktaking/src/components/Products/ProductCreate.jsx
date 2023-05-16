import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { ProductCreateForm } from './ProductCreateForm';

const ProductCreate = () => {

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4">
              Create a new product
            </Typography>
            <Breadcrumbs
              separator="/"
              sx={{ mt: 1 }}
            >
              <Link
                href="/dashboard"
                passHref
              >
                  Dashboard
              </Link>
              <Link
                href="/dashboard"
                passHref
              >
                  Management
                </Link>
              <Typography
                color="textSecondary"
                variant="subtitle2"
              >
                Products
              </Typography>
            </Breadcrumbs>
          </Box>
          <ProductCreateForm />
        </Container>
      </Box>
    </>
  );
};

ProductCreate.getLayout = (page) => (
      {page}
);

export default ProductCreate;
