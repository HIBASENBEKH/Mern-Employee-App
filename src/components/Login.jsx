import { Grid, Typography, TextField, Button} from '@mui/material';
import React from 'react';
import './App.css'

const Login = () => {
  return (
    <>
   
      <div className='App white-box'> 
      <h1 className='style'>Welcome to Employee Dashboard</h1>
        <div className='form-container'> 
       
          <Typography variant='h3'>
            Login
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant='outlined' fullWidth label='Username' name='username' />
            </Grid>
            <Grid item xs={12}>
              <TextField variant='outlined' fullWidth label='Password' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='secondary' fullWidth>
                Log In
              </Button>
            </Grid>
           
          </Grid>
        </div>
      </div>
      </>
    );
  };
  
export default Login;
    