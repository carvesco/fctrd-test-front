import { Box, Typography, Grid } from '@mui/material';
import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from '../../components/employeeCard/employeeCard';

const Employees: NextPage = (props) => {
  const [Employees, setEmployees] = useState([]);
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log('haciendo peticion a ', url);
    const getEmployees = async () => {
      try {
        const { data, status } = await axios.get(`${url}employees`, {
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          },
        });
        if (data) {
          console.log(data);
          setEmployees(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getEmployees();
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" sx={{ color: '#457b9d',mt:6 }}>
          Employee List
        </Typography>
        {Employees && (
          <Box sx={{ width: '50%', mt: 5, ml: 'auto', mr: 'auto' }}>
            <Grid container justifyContent="center" alignItems="center">
              {Employees.map((item, i) => (
                <>
                  <Grid xs={6}>
                    <EmployeeCard props={item} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Employees;
