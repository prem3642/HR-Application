import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack} from '@mui/material';
import { LoadingButton } from '@mui/lab';


import * as React from 'react';

// components

import { FormProvider, RHFTextField } from '../../../components/hook-form';
import RHFDropdown from '../../../components/hook-form/RHFDropdown';
import RHFDatepicker from '../../../components/hook-form/RHFDatepicker';

// material



// ----------------------------------------------------------------------

export default function RegisterForm() {

  const navigate = useNavigate();


  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    primaryContact: Yup.string().required('Primary contact required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    navigate('/dashboard', { replace: true });
  };
 
  return (

    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
      <Stack spacing={3}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="domainId" label="US domain id" sx={{ minWidth: 120 }} />
          <RHFTextField name="employeeid" label="Employee id" sx={{ minWidth: 120 }} />

        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
        <RHFDropdown name="Employee Type" label="Employee Type" sx={{ width: 545 }}/>
        
        <RHFDatepicker name="DOJ-FTE" label="DOJ-FTE" sx={{ maxWidth: 450 }}/>
        <RHFDatepicker name="DOJ-FTE" label="DOJ-FTE" sx={{ maxWidth: 450 }}/>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
         
          <RHFTextField name="Emp_Tenure" label="Emp_Tenure" sx={{ minWidth: 120 }} />
          <RHFTextField name="First_Name" label="First_Name" sx={{ minWidth: 120 }} />
          
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
         
         <RHFTextField name="last_name" label="Last_Name" sx={{ minWidth: 120 }} />
         <RHFTextField name="primary_contact" label="primary_contact" sx={{ minWidth: 120 }} />
         
       </Stack>
       <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
         
         <RHFTextField name="secondary_contact" label="secondary_contact" sx={{ minWidth: 120 }} />
         <RHFTextField name="email" label="Email address" sx={{ minWidth: 120 }} />
         
       </Stack>

      
       <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

       

         <RHFDropdown name="gender" label="gender" sx={{ minWidth: 120 }} />
         <RHFTextField name="work_location" label="work_location" sx={{ minWidth: 120 }} />
         
       </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
