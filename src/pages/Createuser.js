// import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
// import { useState } from 'react';
// material
// components
// import Page from '../components/Page';
// import Label from '../components/Label';
// import Scrollbar from '../components/Scrollbar';
// import SearchNotFound from '../components/SearchNotFound';
// import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { styled } from '@mui/material/styles';
import { Stack,Card, Container, Typography } from '@mui/material';
// hooks
// import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
// import Logo from '../components/Logo';
// sections
import { RegisterForm } from '../sections/auth/register';


// mock


export default function Createuser() {
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            New user
          </Typography>
        </Stack>

        <Card>
          <Page title="Register">
        <Container sx={{padding:5}}>   
            <RegisterForm />
        </Container>
      
    </Page>
        </Card>
      </Container>
    </Page>
  );
}
