
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, Container, CssBaseline } from '@mui/material'


const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees', error);
      }
    };

    fetchEmployees();
  }, []);
  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
            <Typography component="h2"  variant="h5" style={{ color: 'purple'}}>
          Employee List
        </Typography>
        <List>
          {employees.map((employee) => (
            <ListItem key={employee._id}>
              <ListItemText primary={`${employee.name} - ${employee.position}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>


    </div>
  )
}

export default EmployeeList
